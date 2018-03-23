import React, { Component } from 'react';
// import FontIcon from 'material-ui/FontIcon';
import { Tabs, Tab } from 'material-ui/Tabs';

class Navs extends Component {
  render() {
    return (
      <div style={{ marginLeft: '18%' }}>
        <Tabs
          tabItemContainerStyle={{
            height: '65px',
            backgroundColor: '#264040'
          }}
        >
          <Tab label="Overall" />
          <Tab label="2008" />
          <Tab label="2009" />
          <Tab label="2010" />
          <Tab label="2011" />
          <Tab label="2012" />
          <Tab label="2013" />
          <Tab label="2014" />
          <Tab label="2015" />
          <Tab label="2016" />
          <Tab label="2017" />
        </Tabs>
      </div>
    );
  }
}

export default Navs;
