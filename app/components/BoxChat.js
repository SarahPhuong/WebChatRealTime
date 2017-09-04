
import React from 'react';
class BoxChat extends React.Component{
  render(){
        return (
          
        <div className="box_chat" id="messageArea">
            <div id="left" className="chat">
                <div id="title">User Online</div>
                <div id="danhsachUserOnline"></div>
            </div>
            <div id="right">
                <div id="dsMsg"></div>
                <div className="block"></div>
                <div className="control">
                    <input type="text" id="txtMessage" placeholder="Message..." className="form-control" required=""/>
                    <button type="button" id="btnSend" value="Send"><span className="glyphicon glyphicon-share-alt"></span></button>
                </div>
            </div>
        </div>
    )
  }
}

module.exports = BoxChat;
