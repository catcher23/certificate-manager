import {connect} from 'react-redux';
import * as appActions from '../actions/appActions';
import App from '../components/App';
import * as customerActions from '../actions/customerActions';
import * as certificateActions from '../actions/certificateActions';

const mapStateToProps = (state) => {
  return {
    mappedAppState: state.appState,
    mappedCustomerState: state.customerState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mappedToggleAddForm: () => dispatch(appActions.toggleAddForm()),
    mappedAddCustomer: customer => dispatch(customerActions.addNewCustomer(customer)),
    mappedAddCertificate: certificate => dispatch(certificateActions.addNewCertificate(certificate)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
