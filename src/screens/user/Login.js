import React, {Component} from 'react';

import AuthService from "../../services/AuthService";
import logo from "../../assets/images/logo.png";
import "../../assets/css/user/userlogin.css";


export default class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };

        this.username = React.createRef();
        this.password = React.createRef();

        this.login = this.login.bind(this);
        this.goSignUp = this.goSignUp.bind(this);
    }

    login(e) {
        e.preventDefault();

        const username = this.username.current.value;
        const password = this.password.current.value;

        AuthService.auth(username, password)
        .then((isLogin) => {
            if (isLogin) {
                this.props.history.replace('/');
            }
        });
    }

    goSignUp() {
        this.props.history.replace('/user/signup');
    }
    
    render() {
        return (
            <div className="login-dark vh-100">
                <form 
                    ref={c => {
                        this.form = c;
                    }} 
                    onSubmit={this.login}>
                    <div className="illustration">
                        <p className="header-style">İnsan Kaynakları Yönetim Sistemi</p><img src={logo} loading="auto" width="100" height="100" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="username" placeholder="Email veya Kullanıcı Adı" ref={this.username} required/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" name="password" placeholder="Şifre" ref={this.password} required/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit">Giriş</button></div>
                    <div>
                        <a className="forgot" href="#">
                            Şifrenizi mi unuttunuz?
                        </a>
                        <a id="signup" className="forgot" onClick={this.goSignUp}>
                            Hesabınız yok mu? Kaydolun
                        </a>
                    </div>
                </form>          
            </div>
        );
    }
}
