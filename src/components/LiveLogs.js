import React, { Component } from 'react'
import {
  ListGroup,
  ListGroupItem,
  Button,
} from 'reactstrap'
import Octicon, {ChevronLeft, ChevronRight, Clippy, Alert} from '@githubprimer/octicons-react'
import LogDetailsModal from './LogDetailsModal'

import './LiveLogs.css'

function stylizeItem(type) {
  switch (type) {
  case 'ibftEventIn':
    return {
      color: 'primary',
      icon: ChevronRight,
    }
  case 'ibftEventOut':
    return {
      color: 'info',
      icon: ChevronLeft,
    }
  case 'txEvent':
    return {
      color: 'success',
      icon: Clippy,
    }
  default:
    return {
      color: 'dark',
      icon: Alert,
    }
  }
}

class LiveLogs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detailsModalOpen: false,
      details: null,
    }

    this.openDetailsModal = this.openDetailsModal.bind(this)
    this.closeDetailsModal = this.closeDetailsModal.bind(this)
  }

  openDetailsModal(details) {
    return () => {
      this.setState({
        detailsModalOpen: true,
        details: details,
      })
    }
  }

  closeDetailsModal() {
    this.setState({
      detailsModalOpen: false,
    })
  }

  render() {

    const logs = this.props.logs
      .map((log, id) => (
        <ListGroupItem key={ id } color={ stylizeItem(log.type).color }>
          <Button color="link" onClick={ this.openDetailsModal(log) }>
            <Octicon icon={ stylizeItem(log.type).icon } />
            { (() => {
              switch (log.dataType) {
                case 'core.RequestEvent':
                  return 'Proposal: block'
                default:
                  return log.dataType || log.type
                }
              })()
            }
          </Button>
        </ListGroupItem>
      ))
    const { details, detailsModalOpen } = this.state
    return (
      <div className="LiveLogs h-100">
        <LogDetailsModal
          isOpen={ detailsModalOpen }
          toggle={ this.closeDetailsModal }
          details={ details }
        />
        <ListGroup>
        { logs }
        </ListGroup>
      </div>
    )
  }
}

export default LiveLogs

