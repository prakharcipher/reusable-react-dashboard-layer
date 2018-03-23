import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Options from './Options';
import Background from './ipl.jpg';

class Sidenav extends Component {
  render() {
    return (
      <Drawer
        width={'18%'}
        open={true}
        zDepth={0}
        containerStyle={{
          backgroundImage: 'url(' + Background + ')',
          backgroundPosition: 'center',
          overflowX: 'hidden'
        }}
      >
        <AppBar
          title="IPL Dashboard"
          zDepth={0}
          style={{ backgroundColor: '#264040' }}
        />
        <Options />
      </Drawer>
    );
  }
}

export default Sidenav;
