import React, { Component } from 'react';
import MessageList from './messageList.js';
import InputGroupForm from './inputGroup.js';


export default class ChartWindow extends Component {
  render() {
    return (
      <div  className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.user.username} </div>
			<MessageList messages={this.props.messages} user={this.props.user}  />
            <div>
              <InputGroupForm user={this.props.user} addMessage={this.props.addMessage}/>
            </div>
          </div>);
    
  }
}