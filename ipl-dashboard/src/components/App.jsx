import React, { Component } from 'react';
import Sidenav from './Sidenav';
import Navs from './Navs';
import Year from './Year';

class App extends Component {
  render() {
    return (
      <div>
        <Sidenav />
        <Navs />
        <Year />
      </div>
    );
  }
}

export default App;
