import React from 'react';
import Message from './message.js';


let MessageList = ({messages, user}) => {
return (<ul className="message-list">
              {messages.map((message, index) => (
                <Message key={index} message={message} sender={message.username === user.username} />
              ))}
            </ul>)
}
export default MessageList;