import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';

const CertificateForm = (props) => {
  return (
    <form 
      className="form form-horizontal" 
      id="addCertificateForm" 
      onSubmit={props.addCertificate}
    >
      <div className="row">
        <h3 className="centerAlign">Add Your Certificate</h3>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Body</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter certificate body"
              name="body"
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

export default CertificateForm;
