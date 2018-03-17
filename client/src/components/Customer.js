import React, {Component} from 'react';
import {
  Glyphicon,
  Button,
} from 'react-bootstrap';
import {ConfirmationModal} from './ConfirmationModal';
import {sortObjectsById} from '../utils'

export default class Customer extends Component {
  constructor(props){
    super(props);
    this.hideConfirmationModal = this.hideConfirmationModal.bind(this);
    this.showConfirmationModal = this.showConfirmationModal.bind(this);
    this.confirmDeleteCertificate = this.confirmDeleteCertificate.bind(this);
    this.confirmToggleActivation = this.confirmToggleActivation.bind(this);
    this.determineChangeAction = this.determineChangeAction.bind(this);
  }

  componentWillMount() {
    this.props.mappedfetchCustomerById(this.props.params.id);
    this.props.mappedUpdateCurrentPage('customer')
  }

  hideConfirmationModal() {
    this.props.mappedhideConfirmationModal();
  }
  showConfirmationModal(certificateToDelete, changeType) {
    this.props.mappedshowConfirmationModal(certificateToDelete, changeType);
  }

  confirmDeleteCertificate() {
    this.props.mappedDeleteCertificate(this.props.mappedCertificateState.objectToChange);
  }

  confirmToggleActivation() {
    this.props.mappedToggleActivation(this.props.mappedCertificateState.objectToChange)
  }

  determineChangeAction() {
    switch(this.props.mappedCertificateState.changeType) {
      case 'update':
        return this.confirmToggleActivation
      case 'delete':
        return this.confirmDeleteCertificate
      default:
        return
    }
  }

  render() {
    const customerState = this.props.mappedCustomerState;
    const customer = customerState.customer
    const certificateState = this.props.mappedCertificateState;
    certificateState.certificates = customerState.certificates;

    return(
      <div className="customerDetail">
        <h4>Customer Certificates</h4>
          
          {customerState.isFetching &&
            <div className="loader">Loading...</div>
          }

          {customer && !customerState.isFetching &&
            <div>
              <h4>{customer.name}</h4>
              {customer.Certificates.length > 0 ? 
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Private Key</th>
                      <th>Body</th>
                      <th>Activated</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortObjectsById(customerState.certificates).map((certificate, i) => 
                      <tr key={i}>
                        <td>{certificate.id}</td>
                        <td>{certificate.privateKey}</td>
                        <td>{certificate.body}</td>
                        <td>
                          {certificate.active ? 'Yes' : 'No'} 
                          <Button 
                            onClick={() => this.showConfirmationModal(certificate, 'update')}
                            bsSize="xsmall"
                            className="changeBtn">Change
                          </Button>
                        </td>
                        <td>
                          <Button 
                            onClick={() => this.showConfirmationModal(certificate, 'delete')}
                            bsStyle="danger" 
                            bsSize="xsmall"
                          >
                            <Glyphicon glyph="remove" />
                          </Button>
                        </td>
                      </tr> 
                    )}
                  </tbody>
                </table> : <p>No certificates were found for this customer</p>
              }
            </div>
          }

        <ConfirmationModal
          objectState={certificateState}
          hideConfirmationModal={this.hideConfirmationModal}
          showConfirmationModal={this.showConfirmationModal}
          confirmChangeObject={this.determineChangeAction()}
          page={this}
          changeType='delete'
        />
      </div>
    );
  }
}
