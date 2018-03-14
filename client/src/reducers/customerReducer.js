const INITIAL_STATE = {
  certificates: [],
  customers:[],
  customer:null,
  isFetching: false,
  error: null,
  successMsg:null,
  showConfirmationModal: false,
  objectToChange: null,
  newCustomer: null,
  type: 'customer',
  changeType: ''
}

export  const customerReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_CUSTOMERS_REQUEST':
      return {
        ...currentState,
        customers:[],
        isFetching: true,
        error: null,
        successMsg: null,
        showConfirmationModal: false,
        objectToChange: null,
      }

    case 'FETCH_CUSTOMERS_SUCCESS':
      return {
        ...currentState,
        customers: action.customers,
        isFetching: false,
        error: null,
        successMsg:action.message,
        showConfirmationModal: false,
        objectToChange: null,
      }

    case 'FETCH_CUSTOMERS_FAILED':
      return {
        ...currentState,
        customers:[],
        isFetching: false,
        error: action.error,
        successMsg:null,
        showConfirmationModal: false,
        objectToChange: null,
      }

    case 'FETCH_CUSTOMER_REQUEST':
      return {
        ...currentState,
        customers:currentState.customers,
        isFetching: true,
        error: null,
        successMsg:null,
        showConfirmationModal: false,
        objectToChange: null,
      }

    case 'FETCH_CUSTOMER_SUCCESS':
      return {
        ...currentState,
        customers: currentState.customers,
        customer: action.customer,
        certificates: action.customer.Certificates,
        isFetching: false,
        error: null,
        successMsg:action.message,
        showConfirmationModal: false,
        objectToChange: null,
      }

    case 'FETCH_CUSTOMER_FAILED':
      return {
        ...currentState,
        customers:[],
        isFetching: false,
        error: action.error,
        successMsg:null,
        showConfirmationModal: false,
        objectToChange: null,
      }

    case 'ADD_NEW_CUSTOMER_REQUEST':
      return {
        ...currentState,
        customers:currentState.customers,
        isFetching: true,
        error: null,
        successMsg:null,
        showConfirmationModal: false,
        objectToChange: null,
        newCustomer: action.customer
      }

    case 'ADD_NEW_CUSTOMER_REQUEST_FAILED':
      return {
        ...currentState,
        customers:currentState.customers,
        isFetching: true,
        error: action.error,
        successMsg:null,
        showConfirmationModal: false,
        objectToChange: null,
        newCustomer: null
      }

    case 'ADD_NEW_CUSTOMER_REQUEST_SUCCESS':
      return {
        ...currentState,
        customers:[...currentState.customers, action.customer],
        isFetching: false,
        error: null,
        successMsg:action.message,
        showConfirmationModal: false,
        objectToChange: null,
        newCustomer: action.customer
      }

  case 'DELETE_CUSTOMER_REQUEST':
    return {
      ...currentState,
      customers:currentState.customers,
      isFetching: true,
      error: null,
      successMsg:null,
      showConfirmationModal: true,
      objectToChange: action.customer,
      showEditModal: false,
      newCustomer: null
    }

  case 'DELETE_CUSTOMER_SUCCESS':
  const filteredCustomers = currentState.customers.filter(
    customer => customer.id !== currentState.objectToChange.id)
      return {
        ...currentState,
        customers:filteredCustomers,
        isFetching: false,
        error: null,
        successMsg:action.message,
        showConfirmationModal: true,
        objectToChange: null,
        newCustomer: null
      }


  case 'DELETE_CUSTOMER_FAILED':
    return {
      ...currentState,
      customers:currentState.customers,
      isFetching: false,
      error: action.error,
      successMsg:null,
      showConfirmationModal: true,
      objectToChange: null,
      newCustomer: null
    }

  case 'SHOW_DELETE_MODAL':
    return {
      ...currentState,
      customers:currentState.customers,
      isFetching: false,
      error: null,
      successMsg:null,
      showConfirmationModal: true,
      objectToChange: action.objectToChange,
      newCustomer: null,
      changeType: action.changeType
    }

  case 'HIDE_DELETE_MODAL':
    return {
      ...currentState,
      customers:currentState.customers,
      isFetching: false,
      error: null,
      successMsg:null,
      showConfirmationModal: false,
      objectToChange: null,
      newCustomer: null
    }

    default:
       return currentState;

  }
}
