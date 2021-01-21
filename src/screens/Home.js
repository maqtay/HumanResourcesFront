import React, {Component} from 'react';
import Footer from '../components/Footer';
import AuthService from '../services/AuthService';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
        }

        this.logout = this.logout.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
    }
    
    checkLogin() {
        var user = localStorage.getItem("user");

        if(user) {
            this.setState({ login: true })
        } else {
            this.setState({ login: false })
        }
    }

    componentDidMount() {
        this.checkLogin();
    }

    logout() {
        AuthService.logout();
        window.location.reload();
    }
    render() {
        return (
            <>  
                
                <Footer/>
            </>
        )
    }
}
