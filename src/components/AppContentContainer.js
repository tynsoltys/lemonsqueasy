import React, { Component } from 'react';
import WalletContainer from './WalletContainer';
import PantryContainer from './PantryContainer';

import { store } from '../store/createStore';

class AppContentContainer extends Component {
  render() {
    return (
      <div className="AppContentContainer">
        <WalletContainer store={store} />
        <PantryContainer />
      </div>
    );
  }
}

export default AppContentContainer;
