import React, { Component } from 'react';
import Main from './components/Main'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from './state/Store'

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <BrowserRouter>
            <div>
              <Route exact path='/' component={Main} />
              <Route path='/home' component={Main} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
