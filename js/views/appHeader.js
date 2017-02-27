import React from 'react';
import { Link } from 'react-router';

class AppHeader extends React.Component {
    render() {
        return (
            <header className="app-header">
                <Link to="/">Blog Application</Link>
                <section className="account-ctrl">
                    <Link to="/users/create">Join</Link>
                    <Link to="/login">Log in</Link>
                </section>
            </header>
        );
    }
}

export default AppHeader;