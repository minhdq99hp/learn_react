import React from 'react';
import logo from './logo.svg';
import './App.css';

import CounterContainer from './components/Counter';
import UserListContainer from './components/UserList';
import {Provider} from 'react-redux';
import store from './store/index';

class App extends React.Component {
  render(){
    return (
    <Provider store={store}>
      <CounterContainer>

      </CounterContainer>
      <UserListContainer>

      </UserListContainer>
    </Provider>
    );
  }
}

export default App;
