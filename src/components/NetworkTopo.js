import React, { Component } from 'react'
import {
} from 'reactstrap'
import Graph from 'react-graph-vis'

class NetworkTopo extends Component {

  options = {
    layout: {
      improvedLayout: true
    },
    edges: {
      shadow: true,
      smooth: true,
    },
    nodes: {
      shape: 'hexagon',
      shadow: true,
      size: 40,
      font: {
        color: 'white',
      },
    },
    autoResize: true,
  }

  events = {
    select: event => {
      var { nodes, edges } = event;
      console.log("Selected nodes:");
      console.log(nodes);
      console.log("Selected edges:");
      console.log(edges);
    }
  }

  render() {
    const { graph } = this.props

    return (
      <div className="NetworkTopo h-100">
        <Graph graph={graph} options={this.options} events={this.events} style={{ height: '100%', width: '100%'}}/>
      </div>
    )
  }
}

export default NetworkTopo
