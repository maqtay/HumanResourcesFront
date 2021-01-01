import React, {Component} from 'react';

import UserService from '../../services/UserService';

import logo from "../../assets/images/logo.png";
import "../../assets/css/user/userlogin.css";


export default class UserSignUp extends Component {
    constructor(props) {
        super(props);

        this.username = React.createRef();
        this.email = React.createRef();
        this.fName = React.createRef();
        this.password = React.createRef();
        this.repassword = React.createRef();

        this.signup = this.signup.bind(this);
        this.goLogin = this.goLogin.bind(this);
    }

    signup() {
        const user = {
            username: this.username.current.value,
            email: this.email.current.value,
            fName: this.fName.current.value,
            password: this.password.current.value,
        }

        UserService.signup(user).then((isSignup) => {
            if(isSignup) {
                this.goLogin();
            }
        }).catch((err)=>  {
            console.log(err);
        })
    }

    goLogin() {
        this.props.history.replace('/user/login', );
    }

    render() {
        return (
            <div className="login-dark vh-100">
                <form method="get" onSubmit={() => this.login()}>
                    <div className="illustration">
                        <p className="header-style">
                            İnsan Kaynakları Yönetim Sistemi
                        </p>
                        <img src={logo} loading="auto" width="100" height="100" />
                        <p className="signup-text">
                            Kayıt Ol
                        </p>
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="username" placeholder="Kullanıcı Adı" ref={this.username} required/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="fname" placeholder="Ad Soyad" ref={this.fName} required/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="email" placeholder="Email" ref={this.email} type="email" required/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" name="password" placeholder="Şifre" ref={this.password} required/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" name="repassword" placeholder="Şifre yeniden!" ref={this.repassword} required/>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-danger btn-block" type="submit">Kayıt Ol</button>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-secondary btn-block" type="button" onClick={this.goLogin}>Giriş ekranına geri dön!</button>
                    </div>
                    <div className="info">
                        <label/>
                    </div>
                </form>          
            </div>
        )
    }
}
