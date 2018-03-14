import {fetchCustomerById} from './customerActions'
const apiUrl = "/certificates/";

export const toggleAddCertificate = () => {
  return {
    type: 'TOGGLE_ADD_CERTIFICATE'
  }
}

export const addNewCertificate = (certificate) =>
  dispatch => {
    dispatch(addNewCertificateRequest(certificate));
    return fetch(apiUrl, {
      method:'post',
      body: certificate,
    }).then(response => {
      if(response.ok){
          dispatch(addNewCertificateRequestSuccess(certificate))
          dispatch(fetchCustomerById(certificate.get('customerId')));
      }
      else{
        response.json().then(error => {
          dispatch(addNewCertificateRequestFailed(error))
        })
      }
    })
  }


export const toggleCertificateActivation = certificate =>
  dispatch => {
    dispatch(toggleCertificateActivationRequest(certificate));
    return fetch(apiUrl + certificate.id, {
      method:'put',
      body: certificate
    }).then(response => {
      if(response.ok){
        response.json().then(certificate => {
          dispatch(toggleCertificateActivationSuccess(certificate));
          dispatch(fetchCustomerById(certificate.customerId));
        })
      }
      else{
        response.json().then(error => {
          dispatch(toggleCertificateActivationFailed(error));
        })
      }
    })
  }


export const toggleCertificateActivationSuccess = certificate => {
  return {
    type: 'TOGGLE_CERTIFICATE_ACTIVATION_SUCCESS',
    message: 'updated',
    certificate,
  }
}

export const toggleCertificateActivationFailed = error => {
  return {
    type: 'TOGGLE_CERTIFICATE_ACTIVATION_FAILED',
    error
  }
}

export const toggleCertificateActivationRequest = certificate => {
  return {
    type:'TOGGLE_CERTIFICATE_ACTIVATION_REQUEST',
    certificate
  }
}

export const addNewCertificateRequest = certificate => {
  return {
    type: 'ADD_NEW_CERTIFICATE_REQUEST',
    certificate
  }
}

export const addNewCertificateRequestSuccess = certificate => {
  return {
    type: 'ADD_NEW_CERTIFICATE_REQUEST_SUCCESS',
    certificate,
  }
}

export const addNewCertificateRequestFailed = error => {
  return {
    type: 'ADD_NEW_CERTIFICATE_REQUEST_FAILED',
    error
  }
}

//Async action
export const fetchCertificates = () =>
  // Returns a dispatcher function
  // that dispatches an action at later time
  dispatch => {
    dispatch(fetchCertificatesRequest());
    // Returns a promise
    return fetch(apiUrl)
      .then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(fetchCertificatesSuccess(data));
          })
        }
        else{
          response.json().then(error => {
            dispatch(fetchCertificatesFailed(error));
          })
        }
      })
  }

export const fetchCertificatesRequest = () => {
  return {
    type:'FETCH_CERTIFICATES_REQUEST'
  }
}

export const fetchCertificatesSuccess = data => {
  return {
    type: 'FETCH_CERTIFICATES_SUCCESS',
    certificates: data,
    receivedAt: Date.now
  }
}

export const fetchCertificatesFailed = error => {
  return {
    type:'FETCH_CERTIFICATES_FAILED',
    error
  }
}

export const fetchCertificateById = certificateId =>
  dispatch => {
    dispatch(fetchCertificateRequest());
      // Returns a promise
      return fetch(apiUrl + certificateId)
        .then(response => {
          if(response.ok){
            response.json().then(certificate => {
              dispatch(fetchCertificateSuccess(certificate));
            })
          }
          else{
            response.json().then(error => {
              dispatch(fetchCertificateFailed(error));
            })
          }
        })
  }

export const fetchCertificateRequest = () => {
  return {
    type:'FETCH_CERTIFICATE_REQUEST'
  }
}


export const fetchCertificateSuccess = certificate => {
  return {
    type: 'FETCH_CERTIFICATE_SUCCESS',
    certificate: certificate,
    receivedAt: Date.now
  }
}

export const fetchCertificateFailed = error => {
  return {
    type:'FETCH_CERTIFICATE_FAILED',
    error
  }
}

export const deleteCertificate = certificate =>
  dispatch => {
    dispatch(deleteCertificateRequest(certificate));
    return fetch(apiUrl + certificate.id ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
        dispatch(deleteCertificateSuccess());
        dispatch(fetchCustomerById(certificate.customerId));
      }
      else{
        response.json().then(error => {
          dispatch(deleteCertificateFailed(error));
        })
      }
    })
  }


export const deleteCertificateRequest = certificate => {
  return {
    type:'DELETE_CERTIFICATE_REQUEST',
    certificate
  }
}

export const deleteCertificateSuccess = () => {
  return {
    type:'DELETE_CERTIFICATE_SUCCESS',
    message:"deleted"
  }
}

export const deleteCertificateFailed = error => {
  return {
    type:'DELETE_CERTIFICATE_FAILED',
    error
  }
}

export const showConfirmationModal = (certificateToChange, changeType) => {
  return {
    type: 'SHOW_CONFIRMATION_MODAL',
    objectToChange: certificateToChange,
    changeType: changeType
  }
}

export const hideConfirmationModal = () => {
  return {
    type:'HIDE_DELETE_MODAL'
  }
}
