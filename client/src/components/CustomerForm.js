import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';

const CustomerForm = props => {
  return (
    <form 
      className="form form-horizontal" 
      id="addCustomerForm" 
      onSubmit={props.addCustomer}
    >
      <div className="row">
        <h3 className="centerAlign">Add Your Customer</h3>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Name: </ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter customer name"
              name="name"
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Email: </ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter customer email"
              name="email"
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Password: </ControlLabel>
            <FormControl
              type="password"
              placeholder="Enter customer password"
              name="password"
            />
          </FormGroup>
        </div>
      </div>
          <FormGroup>
            <Button type="submit" bsStyle="success" bsSize="small">Submit</Button>
          </FormGroup>
    </form>
  );
}

export default CustomerForm;
