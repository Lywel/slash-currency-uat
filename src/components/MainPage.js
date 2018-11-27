import React, { Component } from 'react'
import {
  Row,
  Col,
  Container,
} from 'reactstrap'
import LiveLogs from './LiveLogs'
import NetworkTopo from './NetworkTopo'

import './MainPage.css'

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logs: [],
      status: 'disconnected',
      failed: false,
      nodes: [],
      edges: [],
    }

    this.connect = this.connect.bind(this)
    this.connectionStatusChanged = this.connectionStatusChanged.bind(this)
    this.updateNetworkTopo = this.updateNetworkTopo.bind(this)
  }

  componentDidMount() {
    this.connect(this.props.url)
  }

  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      this.setState({...this.state,
        tries: 0
      })
    }
    if (this.props.url !== prevProps.url
      || (this.state.status === 'disconnected' && this.state.tries < 3))
      this.connect(this.props.url)
  }

  connectionStatusChanged(status) {
    this.setState({...this.state,
      status: status
    })
    this.props.onStateChange(status)
  }

  connect(url) {
    this.setState({...this.state,
      tries: this.tries + 1
    })
    this.connectionStatusChanged('connecting')
    const ws = new WebSocket('ws://' + url)

    ws.onmessage = e => {
      console.log('onmessage:', e.data)
      const msg = JSON.parse(e.data)
      switch (msg.type) {
      case 'network-state':
        const nodes = Object.entries(msg.data)
          .map(([address, networkAddress], id) => {
          const label = networkAddress.split(':')[0] || 'THIS'
          let node = {
            id: id,
            label: label,
            address: address,
            networkAddress: networkAddress,
          }
          if (networkAddress === ':8080') {
            node.color = 'green'
            node.fixed = true
          }
          return node
        })
        console.log(nodes)
        const edges = nodes
          .filter(node => node.id !== 1)
          .map(node => ({ to: 1, from: node.id }))

        this.setState({...this.state,
          edges: edges,
          nodes: nodes,
        })
        break
      default:
        this.setState(prevState => ({
          logs: [...prevState.logs, msg]
        }))
      }
    }

    ws.onopen = e => {
      this.connectionStatusChanged('connected')
      this.setState({...this.state,
        logs: [],
        failed: false,
      })
      this.updateNetworkTopo()
    }

    ws.onerror = e => {
      this.connectionStatusChanged('disconnected')
      this.ws.close()
      this.setState({...this.state,
        logs: [],
        failed: true,
      })
    }
    ws.onclose = e => {
      this.connectionStatusChanged('disconnected')
      this.ws.close()
      this.setState({...this.state,
        logs: [],
        failed: true,
      })
    }
    this.ws = ws
  }

  updateNetworkTopo() {
    this.ws.send(JSON.stringify({
      type: 'network-state'
    }))
  }

  render() {
    const { logs, status, nodes, edges } = this.state
    return (
      <Container fluid className={"MainPage " + status}>
        <Row className="h-100">
          <Col md='3' className="h-100">
            <LiveLogs logs={ logs }/>
          </Col>
          <Col md='9' className="h-100">
            <NetworkTopo graph={{ nodes,  edges }} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MainPage
