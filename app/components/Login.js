
import React from 'react';

class Login extends React.Component{
  render(){
        return (
            <div className="login">
              <div className="logo">
                <div className="App-header">
                   <a href="#"><img src="/img/logo.png" className="App-logo" alt="logo"/></a>
                   <h1>Join Chat FLC</h1>
                 </div>
              </div>
              <form className="box_login">
                <div className="box_input">
                  <label>Username: </label>
                  <input type="text" id="txtUsername" className="input_text" placeholder="Username" required=""/>
                </div>
                <div className="box_input">
                  <label>Email: </label><br/>
                  <input type="email" className="input_text" id="email" placeholder="Email" required=""/>
                </div>
                <div className="box_control">
                  <button type="reset" id="btnHuyBo" className="btn_control">Hủy bỏ</button>
                  <input type="button" id="btnDangNhap" className="btn_control" value="Đăng kí"/>
                </div>
              </form>
            </div>
    )
  }
}

module.exports = Login;
