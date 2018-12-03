import React, { Component } from 'react'
import {
  Card,
  CardTitle,
  CardText,
} from 'reactstrap'

class NetworkDetails extends Component {
  render() {
    const { node } = this.props
    return (
      <div className="NetworkDetails h-100">
        <Card body color='dark'>
          <CardTitle>{ node ? node.label : 'select a node' }</CardTitle>
          <ul>
          { node ?
            Object.entries(node).map(([key, val], id) => (
              <li key={id}>
                <strong>{ key }: </strong>
                { val }
              </li>
            ))
            : ''
          }
          </ul>
        </Card>
      </div>
    )
  }
}

export default NetworkDetails

