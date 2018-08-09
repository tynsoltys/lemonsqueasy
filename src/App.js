import React, { Component } from 'react';

import 'normalize.css';
import './App.css';

import AppHeader from './components/AppHeader'
import AppContentContainer from './components/AppContentContainer';

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps} from './actions/actions';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <AppHeader/>
        <AppContainer />
        {/* Remember that AppContainer is loading AppContentContainer */}
      </div>
    );
  }
}

const connectStore = connect(
  mapStateToProps,
  mapDispatchToProps
)

const AppContainer = connectStore(AppContentContainer);

export default App;
