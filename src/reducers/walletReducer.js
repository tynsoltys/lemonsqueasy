import { INITIAL_STATE } from '../store/initialState';

export const walletReducer = (state = INITIAL_STATE.wallet, action) => {
  switch (action.type) {
    case 'ADD_WEALTH':
      return {
        ...state,
        wealth: state.wealth + action.value
      }
    case 'REMOVE_WEALTH':
      return  {
        ...state,
        wealth: state.wealth - action.value
      }
    default:
      return state
  }
}