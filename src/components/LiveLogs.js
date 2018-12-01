import React, { Component } from 'react'
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  UncontrolledCollapse,
} from 'reactstrap'
import Octicon, {ChevronLeft, ChevronRight} from '@githubprimer/octicons-react'

import './LiveLogs.css'

class LiveLogs extends Component {
  render() {
    const logs = this.props.logs
      .reverse()
      .map((log, id) => (
        <div key={ id } >
          <Card className="text-white bg-dark">
            <CardHeader id={ 'log-toggler-' + id }>
              {
                log.type === "ibftEventIn"
                  ? <Octicon icon={ChevronLeft} />
                  : <Octicon icon={ChevronRight} />
              }
              { log.dataType || log.type }
            </CardHeader>
            <UncontrolledCollapse toggler={ '#log-toggler-' + id }>
              <CardBody>
                  { typeof(log.data) === 'string'
                      ? log.data
                      : Object.entries(log.data)
                        .map(([key, val], id) => {
                          switch (key) {
                          case 'Address':
                          case 'Dest':
                            val = val.map(c => c.toString(16)).join('')
                            break;
                          default:
                            val = JSON.stringify(val)
                          }
                          return (
                            <p key={ id }>
                              <strong>{ key }: </strong>
                              <span>
                              { val }
                              </span>
                            </p>
                          )
                        })
                  }
              </CardBody>
            </UncontrolledCollapse>
          </Card>
        </div>
      ))
    return (
      <div className="LiveLogs h-100">
        <h3>Live logs</h3>
        <div>
        { logs }
        </div>
      </div>
    )
  }
}

export default LiveLogs

