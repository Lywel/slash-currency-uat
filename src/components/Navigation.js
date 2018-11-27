import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  Input,
  InputGroup,
  InputGroupAddon,
  Badge,
  Button,
} from 'reactstrap'
import './Navigation.css'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: this.props.url
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({...this.state, url: evt.target.value})
  }

  render() {
    const { status, onChange } = this.props
    const { url } = this.state
    let status_color = {
      connected: 'success',
      connecting: 'warning',
      disconnected: 'danger',
    }[status]

    return (
      <div className={"Navigation " + status} >
        <h1>Validator UAT</h1>
        <Navbar dark expand="md">
          <NavbarBrand>Validator</NavbarBrand>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Badge color={ status_color }>{' '}</Badge>
            </InputGroupAddon>
            <Input value={ url } onChange={ this.handleChange } />
            <InputGroupAddon addonType="append">
              <Button
                onClick={() => onChange(url)}
                disabled={status === 'connected' && this.props.url === this.state.url}>
                { status === 'connected' ? this.props.url !== this.state.url ? 'Change' : 'Connected' : 'Connect' }
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Navbar>
      </div>
    )
  }
}

export default Navigation
