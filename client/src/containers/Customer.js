import {connect} from 'react-redux';
import * as customerActions from '../actions/customerActions';
import * as certificateActions from '../actions/certificateActions';
import * as appActions from '../actions/appActions';
import Customer from '../components/Customer';

const mapStateToProps = (state) => {
  return {
    mappedCertificateState: state.certificateState,
    mappedCustomerState: state.customerState
  }
}

// map actions to props
const mapDispatchToProps = dispatch => {
  return {
    mappedUpdateCurrentPage: page => dispatch(appActions.updateCurrentPage(page)),
    mappedfetchCustomerById: customerId => dispatch(customerActions.fetchCustomerById(customerId)),
    mappedDeleteCertificate: certificateToDelete => dispatch(certificateActions.deleteCertificate(certificateToDelete)),
    mappedToggleActivation: certificateToDelete => dispatch(certificateActions.toggleCertificateActivation(certificateToDelete)),
    mappedshowConfirmationModal: (certificateToChange, changeType) => dispatch(certificateActions.showConfirmationModal(certificateToChange, changeType)),
    mappedhideConfirmationModal: () => dispatch(certificateActions.hideConfirmationModal())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Customer);
