const INITIAL_STATE = {
  certificates:[],
  certificate:null,
  isFetching: false,
  error: null,
  successMsg:null,
  showConfirmationModal: false,
  objectToChange: null,
  newCertificate: null,
  type: 'certificate',
  changeType: ''
}

export  const certificateReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_CERTIFICATE_REQUEST':
    return {
      ...currentState,
      certificate: null,
      isFetching: true,
      error: null,
      successMsg: null,
      showConfirmationModal: false,
      objectToChange: null,
    }

  case 'FETCH_CERTIFICATE_SUCCESS':
      return {
        ...currentState,
        customers: action.customers,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showConfirmationModal: false,
        objectToChange: null,
      }

  case 'FETCH_CERTIFICATE_FAILED':
      return {
        ...currentState,
        customers:[],
        isFetching: false,
        error: action.error,
        successMsg: null,
        showConfirmationModal: false,
        objectToChange: null,
      }


  case 'ADD_NEW_CERTIFICATE_REQUEST':
    return {
      ...currentState,
      certificates: currentState.certificates,
      certificate:null,
      isFetching: true,
      error: null,
      successMsg: null,
      showConfirmationModal: false,
      objectToChange: null,
      newCertificate: action.certificate
    }

  case 'ADD_NEW_CERTIFICATE_REQUEST_FAILED':
    return {
      ...currentState,
      certificates:currentState.certificates,
      certificate:null,
      isFetching: true,
      error: action.error,
      successMsg:null,
      showConfirmationModal: false,
      objectToChange: null,
      newCertificate: null
    }

    case 'ADD_NEW_CERTIFICATE_REQUEST_SUCCESS':
      return {
        ...currentState,
        certificates: [...currentState.certificates, action.certificate],
        certificate: action.certificate,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showConfirmationModal: false,
        objectToChange: null,
        newCertificate: action.certificate
      }

  case 'DELETE_CERTIFICATE_REQUEST':
    return {
      ...currentState,
      certificates:currentState.certificates,
      certificate:null,
      isFetching: true,
      error: null,
      successMsg:null,
      showConfirmationModal: true,
      objectToChange: action.certificate,
      newCertificate: null
    }

  case 'DELETE_CERTIFICATE_SUCCESS':
    let filteredCertificates = currentState.certificates.filter(
      certificate => certificate.id !== currentState.objectToChange.id)
          return {
            ...currentState,
            certificates:filteredCertificates,
            certificate:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showConfirmationModal: true,
            objectToChange: null,
            newCertificate: null
          }


  case 'DELETE_CERTIFICATE_FAILED':
    return {
      ...currentState,
      certificates:currentState.certificates,
      certificate:null,
      isFetching: false,
      error: action.error,
      successMsg:null,
      showConfirmationModal: true,
      objectToChange: null,
      newCertificate: null
    }

  case 'SHOW_CONFIRMATION_MODAL':
    return {
      ...currentState,
      certificates:currentState.certificates,
      isFetching: false,
      error: null,
      successMsg:null,
      showConfirmationModal: true,
      objectToChange: action.objectToChange,
      newcertificate: null,
      changeType: action.changeType
    }

  case 'HIDE_DELETE_MODAL':
    return {
      ...currentState,
      certificates:currentState.certificates,
      isFetching: false,
      error: null,
      successMsg:null,
      showConfirmationModal: false,
      objectToChange: null,
      newcertificate: null
    }

  case 'TOGGLE_CERTIFICATE_ACTIVATION_REQUEST':
    return {
      ...currentState,
      certificates:currentState.certificates,
      certificate:null,
      isFetching: true,
      error: null,
      successMsg:null,
      showConfirmationModal: true,
      objectToChange: action.certificate,
      newCertificate: null
    }
  
  case 'TOGGLE_CERTIFICATE_ACTIVATION_SUCCESS':
    filteredCertificates = currentState.certificates.filter(
      certificate => certificate.id !== currentState.objectToChange.id)
      return {
        ...currentState,
        certificates:filteredCertificates,
        certificate:null,
        isFetching: false,
        error: null,
        successMsg:action.message,
        showConfirmationModal: true,
        objectToChange: null,
        newCertificate: null
      }

  case 'TOGGLE_CERTIFICATE_ACTIVATION_FAILED':
    return {
      ...currentState,
      certificates:currentState.certificates,
      certificate:null,
      isFetching: false,
      error: action.error,
      successMsg:null,
      showConfirmationModal: true,
      objectToChange: null,
      newCertificate: null
    }

    default:
       return currentState;
  }
}
