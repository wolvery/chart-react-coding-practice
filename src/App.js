import React, { Component } from 'react';
import logo from './logo.svg';
import ChartWindow from './chartWindow.js';

import './App.css';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

const initial_messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];

class App extends Component {
  state = { messages:[
    ...initial_messages
  ] }

	addMessage = (newMessage) => {
       this.setState((currentState) => ({messages:[...currentState.messages, newMessage]})); 
    }
	render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
      	 {users.map(user => <ChartWindow key={user.username} user={user} messages={this.state.messages} addMessage={this.addMessage} />)} 
        </div>
      </div>
    );
  }
}

export default App;
