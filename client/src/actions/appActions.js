export const toggleAddForm = () => {
  return {
    type: 'TOGGLE_ADD_FORM'
  }
}

export const updateCurrentPage = page => {
  return {
    type: 'UPDATE_CURRENT_PAGE',
    page
  }
}
