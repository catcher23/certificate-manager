const INITIAL_STATE = {
  showAddForm: false,
  page: 'customers'
}

export const appReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_FORM':
          return {
            ...currentState, 
            showAddForm: !currentState.showAddForm
          }

    case 'UPDATE_CURRENT_PAGE':
          return {
            ...currentState,
            page: action.page
          }
    default:
       return currentState;

  }
}


