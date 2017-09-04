
import React from 'react';
import Login from './Login.js';
import BoxChat from './BoxChat.js';

class AppChat extends React.Component{
  render(){
        return (
          <div>
            <Login/>
           <BoxChat/>
          </div>
    )
  }
}

module.exports = AppChat;
