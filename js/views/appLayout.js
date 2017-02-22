import React, { Component } from 'react';
import AppHeader from './appHeader';

class AppLayout extends Component {
    render() {
        return (
            <div className="app-container">
                <AppHeader />
                <main>
                    {React.cloneElement(this.props.children, this.props)}
                </main>
            </div>
        )
    }
}

export default AppLayout