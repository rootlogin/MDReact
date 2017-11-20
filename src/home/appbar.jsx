import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Drawer from 'material-ui/Drawer';
import { Tabs, Tab } from 'material-ui/Tabs';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import { white, } from 'material-ui/styles/colors';
import SwipeableViews from 'react-swipeable-views';
import PageOneCard from './pageone.jsx';



const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};


const AppBarMenu = () => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon color={white} /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

AppBarMenu.muiName = 'IconMenu';




/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarComposition extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      tabIndex: 0,
    };
  }

  /**
   * change左侧Drawer状态
   */
  onDrawerStateChange = () => this.setState({ open: !this.state.open });

  onTabChecked = (value) => {
    this.setState({
      tabIndex: value,
    });
  };


  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconElementLeft={<IconButton onClick={this.onDrawerStateChange}><NavigationMenu /></IconButton>}
          iconElementRight={<AppBarMenu />}
        />


        <Drawer open={this.state.open}>
          <MenuItem onClick={this.onDrawerStateChange}>Menu Item</MenuItem>
          <MenuItem onClick={this.onDrawerStateChange}>Menu Item 2</MenuItem>
        </Drawer>


        <Tabs
          onChange={this.onTabChecked}
          value={this.state.tabIndex}
        >
          <Tab label="Tab One" value={0} />
          <Tab label="Tab Two" value={1} />
          <Tab label="Tab Three" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.tabIndex}
          onChangeIndex={this.onTabChecked}
        >
          {/* <div>
            <h2 style={styles.headline}>Tabs with slide effect</h2>
            Swipe to see the next slide.<br />
          </div> */}
          <PageOneCard />

          <div style={styles.slide}>
            slide n°2
          </div>
          <div style={styles.slide}>
            slide n°3
          </div>
        </SwipeableViews>
      </div>

    );
  }
}

export default AppBarComposition;