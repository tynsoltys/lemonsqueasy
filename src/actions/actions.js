import { store } from '../store/createStore';

// DEFINING ACTIONS

const ADD_WEALTH = 'ADD_WEALTH';
const REMOVE_WEALTH = 'REMOVE_WEALTH';
const ADD_TO_PANTRY = 'ADD_TO_PANTRY';
const REMOVE_FROM_PANTRY = 'REMOVE_FROM_PANTRY';


// MAKING ACTION CREATORS

export const addWealth = (value) => store.dispatch({ type: ADD_WEALTH, value});
export const removeWealth = (value) => store.dispatch({ type: REMOVE_WEALTH, value});
export const addToPantry = (item, quantity) => store.dispatch({ type: ADD_TO_PANTRY, item, quantity});
export const removeFromPantry = (value) => store.dispatch({ type: REMOVE_FROM_PANTRY, value});

//TODO: figure out why this is working

export const mapStateToProps = state => ({
  ...state
})

export const mapDispatchToProps = dispatch => ({
  addWealth: (value) => dispatch(
  {
    type: ADD_WEALTH,
    payload: {
      value
    }
  }
  ),
  removeWealth: (value) => dispatch(
  {
    type: REMOVE_WEALTH,
    payload: {
      value
    }
  }
  ),
  addToPantry: (item, quantity, price) => dispatch(
      { type: ADD_TO_PANTRY,
        payload: {
          item,
          quantity,
          price
        }
      }
    ),
    removeFromPantry: (item, quantity, price) => dispatch(
      { type: REMOVE_FROM_PANTRY,
        payload: {
        item,
        quantity,
        price
        }
      }
    )
});