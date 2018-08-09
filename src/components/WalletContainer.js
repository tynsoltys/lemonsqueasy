import React, { Component } from 'react';
import { addWealth, removeWealth, mapStateToProps, mapDispatchToProps } from '../actions/actions';

import { connect } from 'react-redux';
import { store } from '../store/createStore';

class WalletContainer extends Component {
  render() {
    return (
      <div className="WalletContainer">
          <h2 className="Module-title">WALLET</h2>
          <p></p>
          <button onClick={() => addWealth(200)}>ADD WEALTH</button>
          <button onClick={() => removeWealth(200)}>REMOVE WEALTH</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(WalletContainer);
