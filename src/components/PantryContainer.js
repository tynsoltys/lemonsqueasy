import React, { Component } from 'react';
import { addToPantry, removeFromPantry, mapStateToProps, mapDispatchToProps } from '../actions/actions';

class PantryContainer extends Component {
  render() {
    return (
      <div className="PantryContainer">
          <h2 className="Module-title">PANTRY</h2>
          <ul>
            <li>Cups <button onClick={() => addToPantry('cups',25)}>ADD</button></li>
            <li>Lemons <button onClick={() => addToPantry('lemons',5)}>ADD</button></li>
            <li>Ice <button onClick={() => addToPantry('ice',50)}>ADD</button></li>
            <li>Sugar <button onClick={() => addToPantry('sugar',1)}>ADD</button></li>
          </ul>
      </div>
    );
  }
}

export default PantryContainer;
