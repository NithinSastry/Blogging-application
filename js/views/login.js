import React from 'react';
import {browserHistory} from 'react-router';

class Login extends React.Component{
    
    logIn(){
        browserHistory.push("/");
    }
    
    render(){
        return(
            <form className="login-form" onSubmit={this.logIn}>
                login form
                <button type="submit">Log In</button>
            </form>
        );
    }
}

export default Login;