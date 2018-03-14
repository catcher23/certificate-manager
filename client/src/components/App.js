import React, {Component} from 'react';
import {
  Navbar,
  Nav,
  NavItem 
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import CustomerForm from './CustomerForm';
import CertificateForm from './CertificateForm';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.toggleAddForm = this.toggleAddForm.bind(this)
    this.addCustomer = this.addCustomer.bind(this);
    this.addCertificate = this.addCertificate.bind(this);
  }

  toggleAddForm(e){
    e.preventDefault();
    this.props.mappedToggleAddForm();
  }

  addCustomer(e){
    e.preventDefault();
    const form = document.getElementById('addCustomerForm');

    if (form.name.value !== '' && form.email.value !== '' && form.password.value !== ''){
      const data = new FormData();
      data.append('name', form.name.value);
      data.append('email', form.email.value);
      data.append('password', form.password.value);
      this.props.mappedAddCustomer(data);
      form.reset();
    } else {
      return
    }
  }

  addCertificate(e){
    e.preventDefault();
    const form = document.getElementById('addCertificateForm');

    if (form.body.value !== ''){
      const data = new FormData();
      data.append('body', form.body.value);
      data.append('customerId', this.props.mappedCustomerState.customer.id);
      this.props.mappedAddCertificate(data);
      form.reset();
    } else {
      return
    }
  }

  render(){
    const appState = this.props.mappedAppState;
    const customerState = this.props.mappedCustomerState;

    return(
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='/'>Customers</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
                <LinkContainer to={{pathname:'/'}} onClick={this.toggleAddForm}>
                  <NavItem eventKey={1}>Add 
                    {appState.page === 'customers' ?
                      ' Customer' :
                      ' Certificate'
                    }
                  </NavItem>
                </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className='container'>
          {appState.showAddForm &&
            (appState.page === 'customers' ?
              <CustomerForm addCustomer={this.addCustomer}/> :
              <CertificateForm 
                customerId={customerState.customer ? 
                  customerState.customer.id : 
                  null
                }
                addCertificate={this.addCertificate}
              />)
          }
        {this.props.children}
        </div>
      </div>
    );
  }
}
