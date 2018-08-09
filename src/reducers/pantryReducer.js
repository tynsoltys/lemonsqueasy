export const pantryReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_PANTRY':
      return {
        ...state,
        item: action.item,
        quantity: action.quantity
      }
    case 'REMOVE_FROM_PANTRY':
      return {
        ...state,
      };
    default:
      return state
  }
}