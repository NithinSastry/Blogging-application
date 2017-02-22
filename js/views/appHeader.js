import React from 'react';
import {Link} from 'react-router';

class AppHeader extends React.Component{
    render(){
        return(
            <header className="app-header">app header
                <Link to="/login">Log in</Link>
            </header>
        );
    }
}

export default AppHeader;