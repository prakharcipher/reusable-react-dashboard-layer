import React, { Component } from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
// import Divider from 'material-ui/Divider';

class Options extends Component {
  render() {
    return (
      <Menu style={{ marginTop: '5%' }}>
        <MenuItem
          primaryText="General"
          style={{
            color: 'white',
            backgroundColor: '#1d3030',
            opacity: '0.6',
            marginTop: '5%'
          }}
        />
        <MenuItem
          primaryText="Batting"
          style={{
            color: 'white',
            backgroundColor: '#1d3030',
            opacity: '0.6',
            marginTop: '5%'
          }}
        />
        <MenuItem
          primaryText="Bowling"
          style={{
            color: 'white',
            backgroundColor: '#1d3030',
            opacity: '0.6',
            marginTop: '5%'
          }}
        />
        <MenuItem
          primaryText="Teams"
          style={{
            color: 'white',
            backgroundColor: '#1d3030',
            opacity: '0.6',
            marginTop: '5%'
          }}
        />
      </Menu>
    );
  }
}

export default Options;
