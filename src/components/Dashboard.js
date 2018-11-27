import React, { Component } from 'react'
import Navigation from './Navigation'
import MainPage from './MainPage'
import './Dashboard.css'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //node_url: 'a263d53aae7c911e8a7a9069f40f5f2f-415446416.ap-southeast-1.elb.amazonaws.com:3000/ws',
      node_url: '127.0.0.1:3001/ws',
      conn_status: 'disconnected',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
  }

  handleChange(url) {
    this.setState({
      node_url: url
    })
  }

  handleStateChange(state) {
    this.setState({ ...this.state,
      conn_status: state
    })
  }

  render() {
    const { node_url, conn_status } = this.state

    return (
      <div className="Dashboard">
        <Navigation url={ node_url } status={ conn_status } onChange={ this.handleChange } />
        <MainPage url={ node_url } onStateChange={ this.handleStateChange } />
      </div>
    )
  }
}

export default Dashboard

