import React, { Component } from 'react';
import Search from './Search'

class Home extends Component {
    render() {
        return (
            <div className="filter-list">
                <Search search={this.props.name} />

            </div>

        )
    }

}

export default Home;