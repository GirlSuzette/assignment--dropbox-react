import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul>
                    <i className="fa fa-dropbox" aria-hidden="true"></i>
                    <li>Profile</li>
                    <li>Setting</li>
                    <li>log out</li>
                </ul>

            </div>
        );
    }
}

export default Sidebar;