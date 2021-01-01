import React, {Component} from 'react';

export default class AdminLogin extends Component {  
  render() {
      return (
      <div className="login-dark vh-100">
            <form method="post">
              <div className="illustration">
                <p style={{fontSize: '24px', lineHeight: '30px'}}>İnsan Kaynakları Yönetim Sistemi</p>
              </div>
              <div className="form-group">
                <input className="form-control" type="email" name="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input className="form-control" type="password" name="password" placeholder="Şifre" />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit" onSubmit={this.goLogin}>Giriş</button>
              </div>
              <div>
                <a className="forgot" href="#">Şifrenizi mi unuttunuz?</a><a id="help" className="forgot" href="#">Yardım.</a>
              </div>
            </form>
          </div>        
      )
  }
}
