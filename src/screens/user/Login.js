import React, {Component} from 'react';

import logo from "../../assets/images/logo.png";
import "../../assets/css/user/userlogin.css";

export default class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
       
    }
    render() {
        return (
            <div className="login-dark vh-100">
                <form method="post">
                    <div className="illustration">
                        <p className="header-style">İnsan Kaynakları Yönetim Sistemi</p><img src={logo} loading="auto" width="100" height="100" />
                    </div>
                    <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                    <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Şifre" /></div>
                    <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Giriş</button></div>
                    <div><a className="forgot" href="#">Şifrenizi mi unuttunuz?</a><a id="help" className="forgot" href="#">Yardım.</a></div>
                </form>          
            </div>
        );
    }
}
