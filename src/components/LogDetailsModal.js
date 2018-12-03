import Octicon, {ChevronLeft, ChevronRight} from '@githubprimer/octicons-react'
import React, { Component } from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  Table,
} from 'reactstrap'

import './LogDetailsModal.css'

function formatLogDetails(details) {
  switch (details.dataType) {
  case 'core.RequestEvent':
    console.log(details)
    const { block, transactions } = details.data.Proposal
    return (<>
      <h3>Proposal: block</h3>
      <Table striped size="sm">
        <tbody>
        {
          Object.entries(block).map(([key, val], id) => (
            <tr key={id}>
              <th>{ key }</th>
              <td>{ val }</td>
            </tr>
          ))
        }
        </tbody>
      </Table>
      <h4>Transactions</h4>
      <Table striped size="sm">
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
        {
          transactions.map((tx, id) => (
            <tr key={id}>
              <td>{ tx.from.substr(10) }</td>
              <td>{ tx.to.substr(10) }</td>
              <td>{ tx.amount }</td>
            </tr>
          ))
        }
        </tbody>
      </Table>
    </>)
  default:
    return (<pre>{ JSON.stringify(details, null, 2) }</pre>)
  }
}

class LogDetailsModal extends Component {
  render() {
    const { isOpen, toggle, details } = this.props

    const body = details ? formatLogDetails(details) : null

    return (
      <div>
        <Modal isOpen={ isOpen } toggle={ toggle } size='lg'>
        { details ? (<>
            <ModalHeader toggle={ toggle }>
            {
              details.type === "ibftEventIn"
                ? <Octicon icon={ChevronLeft} />
                : <Octicon icon={ChevronRight} />
            }
            { details.dataType || details.type }
            </ModalHeader>
            <ModalBody>
            { body }
            </ModalBody>
          </>
          ) : ''
        }
        </Modal>
      </div>
    )
  }
}

export default LogDetailsModal
