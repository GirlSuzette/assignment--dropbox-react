import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import Home from './components/Home'


class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Home name={this.props.name} />
      </div>
    );
  }
}

export default App;
