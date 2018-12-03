import React, { Component } from 'react'
import {
  Row,
  Col,
  Container,
} from 'reactstrap'
import LiveLogs from './LiveLogs'
import NetworkTopo from './NetworkTopo'
import NetworkDetails from './NetworkDetails'

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
      ws: null,
      tries: 0,
      selectedNetworkNode: null,
    }

    this.connect = this.connect.bind(this)
    this.connectionStatusChanged = this.connectionStatusChanged.bind(this)
    this.updateNetworkTopo = this.updateNetworkTopo.bind(this)
    this.onNodeSelect = this.onNodeSelect.bind(this)
  }

  componentDidMount() {
    this.connect(this.props.url)
  }

  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      this.setState({
        tries: 0
      }, () => this.connect(this.props.url))
    } else if (this.state.status === 'disconnected' && this.state.tries < 3) {
      this.connect(this.props.url)
    }
  }

  connectionStatusChanged(status) {
    this.setState({
      status: status
    })
    this.props.onStateChange(status)
  }

  connect(url) {
    this.setState({
      tries: this.state.tries + 1
    })
    if (this.state.ws && this.state.status !== 'disconnected') {
      this.state.ws.onclose = null
      this.state.ws.close()
    }
    this.connectionStatusChanged('connecting')
    const ws = new WebSocket('ws://' + url)

    ws.onmessage = e => {
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
        const edges = nodes
          .filter(node => node.id !== 1)
          .map(node => ({ to: 1, from: node.id }))

        this.setState({
          edges: edges,
          nodes: nodes,
        })
        break
      default:
        msg.date = Date.now()
        const logs = [...this.state.logs, msg].sort((a, b) => (b.date - a.date)).slice(0, 20)
        this.setState({
          logs: logs
        })
      }
    }

    ws.onopen = e => {
      this.connectionStatusChanged('connected')
      this.setState({
        logs: [],
        failed: false,
      })
      this.updateNetworkTopo()
    }

    ws.onerror = e => {
      this.connectionStatusChanged('disconnected')
      this.state.ws.close()
    }
    ws.onclose = e => {
      this.connectionStatusChanged('disconnected')
    }
    this.setState({ws})
  }

  updateNetworkTopo() {
    this.state.ws.send(JSON.stringify({
      type: 'network-state'
    }))
  }

  onNodeSelect(nodeId) {
    this.setState({
      selectedNetworkNode: this.state.nodes[nodeId]
    })
  }

  render() {
    const { logs, status, nodes, edges, selectedNetworkNode } = this.state
    return (
      <Container fluid className={"MainPage " + status}>
        <Row className="h-100">
          <Col md='2' className="h-100">
            <LiveLogs logs={ logs }/>
            <h2>Live logs</h2>
          </Col>
          <Col md='6' className="h-100">
            <NetworkTopo graph={{ nodes,  edges }} onNodeSelect={ this.onNodeSelect } />
            <h2>Network topology</h2>
          </Col>
          <Col md='4' className="h-100">
            <NetworkDetails node={ selectedNetworkNode } />
            <h2>Node details</h2>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MainPage
