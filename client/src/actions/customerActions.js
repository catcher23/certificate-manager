const apiUrl = "/customers/";

export const toggleAddCustomer = () => {
  return {
    type: 'TOGGLE_ADD_CUSTOMER'
  }
}

export const addNewCustomer = customer => {
  return (dispatch) => {
    dispatch(addNewCustomerRequest(customer));
    return fetch(apiUrl, {
      method:'post',
      body: customer,
    }).then(response => {
      if(response.ok){
        response.json().then(customer =>
          dispatch(addNewCustomerRequestSuccess(customer))
        )
      }
      else{
        response.json().then(error => {
          dispatch(addNewCustomerRequestFailed(error))
        })
      }
    })
  }
}

export const addNewCustomerRequest = customer => {
  return {
    type: 'ADD_NEW_CUSTOMER_REQUEST',
    customer:customer
  }
}

export const addNewCustomerRequestSuccess = customer => {
  return {
    type: 'ADD_NEW_CUSTOMER_REQUEST_SUCCESS',
    customer:customer,
  }
}

export const addNewCustomerRequestFailed = error => {
  return {
    type: 'ADD_NEW_CUSTOMER_REQUEST_FAILED',
    error
  }
}

export const fetchCustomers = () =>
  dispatch => {
    dispatch(fetchCustomersRequest());
    return fetch(apiUrl)
      .then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(fetchCustomersSuccess(data));
          })
        }
        else{
          response.json().then(error => {
            dispatch(fetchCustomersFailed(error));
          })
        }
      })
  }


export const fetchCustomersRequest = () => {
  return {
    type:'FETCH_CUSTOMERS_REQUEST'
  }
}

export const fetchCustomersSuccess = data => {
  return {
    type: 'FETCH_CUSTOMERS_SUCCESS',
    customers: data,
    receivedAt: Date.now
  }
}

export const fetchCustomersFailed = error => {
  return {
    type:'FETCH_CUSTOMERS_FAILED',
    error
  }
}

export const fetchCustomerById = customerId =>
  dispatch => {
    dispatch(fetchCustomerRequest());
      return fetch(apiUrl + customerId)
        .then(response => {
          if(response.ok){
            response.json().then(customer => {
              dispatch(fetchCustomerSuccess(customer));
            })
          }
          else{
            response.json().then(error => {
              dispatch(fetchCustomerFailed(error));
            })
          }
        })
  }


export const fetchCustomerRequest = () => {
  return {
    type:'FETCH_CUSTOMER_REQUEST'
  }
}


//Sync action
export const fetchCustomerSuccess = customer => {
  return {
    type: 'FETCH_CUSTOMER_SUCCESS',
    customer: customer,
    receivedAt: Date.now
  }
}

export const fetchCustomerFailed = error => {
  return {
    type:'FETCH_CUSTOMER_FAILED',
    error
  }
}

export const deleteCustomer = customer => 
  dispatch => {
    dispatch(deleteCustomerRequest(customer));
    return fetch(apiUrl + customer.id ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
          dispatch(deleteCustomerSuccess());
      }
      else{
        response.json().then(error => {
          dispatch(deleteCustomerFailed(error));
        })
      }
    })
  }


export const deleteCustomerRequest = customer => {
  return {
    type:'DELETE_CUSTOMER_REQUEST',
    customer
  }
}

export const deleteCustomerSuccess = () => {
  return {
    type:'DELETE_CUSTOMER_SUCCESS',
    message:"deleted"
  }
}

export const deleteCustomerFailed = error => {
  return {
    type:'DELETE_CUSTOMER_FAILED',
    error
  }
}

export const showConfirmationModal = (customerToDelete, changeType) => {
  return {
    type:'SHOW_DELETE_MODAL',
    objectToChange:customerToDelete,
    changeType: changeType
  }
}

export const hideConfirmationModal = () => {
  return {
    type:'HIDE_DELETE_MODAL'
  }
}
