import React, {Component} from 'react';
import {
  Glyphicon,
  Button,
} from 'react-bootstrap';
import {Link} from 'react-router';
import {ConfirmationModal} from './ConfirmationModal';
import {sortObjectsById} from '../utils'

export default class Customers extends Component {
  constructor(props) {
    super(props);
    this.hideConfirmationModal = this.hideConfirmationModal.bind(this);
    this.confirmDeleteCustomer = this.confirmDeleteCustomer.bind(this);
  }

  componentWillMount() {
    this.props.mappedfetchCustomers();
    this.props.mappedUpdateCurrentPage('customers')
  }
  
  hideConfirmationModal(){
    this.props.mappedhideConfirmationModal();
  }
  showConfirmationModal(customerToDelete, changeType){
    this.props.mappedshowConfirmationModal(customerToDelete, changeType);
  }

  confirmDeleteCustomer(){
    this.props.mappedDeleteCustomer(this.props.mappedCustomerState.objectToChange);
  }
  
  render() {
    const customerState = this.props.mappedCustomerState;
    const customers = customerState.customers;

    return(
      <div className="col-md-12">
      <h4>Customers</h4>

      {!customers && customerState.isFetching &&
        <p>Loading customers....</p>
      }

      {customers.length <= 0 && !customerState.isFetching &&
        <p>No Customers Available. Add A Customer to List here.</p>
      }

      {customers && customers.length > 0 && !customerState.isFetching &&
        <table className="table">
        <thead>
          <tr>
            <th>Customer</th>
            <th className="textCenter">View</th>
            <th className="textCenter">Delete</th>
          </tr>
        </thead>
        <tbody>
          {sortObjectsById(customers).map((customer, i) => 
            <tr key={i}>
              <td>{customer.name}</td>
              <td className="textCenter">
                <Link to={`/${customer.id}`}>View Certificates</Link>
              </td>
              <td className="textCenter">
                <Button onClick={() => this.showConfirmationModal(customer, 'delete')} bsStyle="danger" bsSize="xsmall">
                  <Glyphicon glyph="trash" />
                </Button>
              </td>
          </tr> 
          )
        }
        </tbody>
        </table>
      }

      <ConfirmationModal
        objectState={customerState}
        hideConfirmationModal={this.hideConfirmationModal}
        showConfirmationModal={this.showConfirmationModal}
        confirmChangeObject={this.confirmDeleteCustomer}
        page={this}
        changeType='delete'
      />
      </div>
    );
  }
}