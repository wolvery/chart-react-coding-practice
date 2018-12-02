import React from 'react';

let Message = ({message,  sender}) => (
                <li
                  
                  className={
                    sender ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
);

export default Message;