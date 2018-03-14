import {connect} from 'react-redux';
import * as customerActions from '../actions/customerActions';
import * as appActions from '../actions/appActions';
import Customers from '../components/Customers';

const mapStateToProps = (state, ownProps) => {
  return {
    mappedCustomerState: state.customerState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mappedUpdateCurrentPage: (page) => dispatch(appActions.updateCurrentPage(page)),
    mappedfetchCustomers: () => dispatch(customerActions.fetchCustomers()),
    mappedDeleteCustomer: customerToDelete => dispatch(customerActions.deleteCustomer(customerToDelete)),
    mappedshowConfirmationModal: (customerToDelete, changeType) => dispatch(customerActions.showConfirmationModal(customerToDelete, changeType)),
    mappedhideConfirmationModal: () => dispatch(customerActions.hideConfirmationModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
