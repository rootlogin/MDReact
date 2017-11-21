import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Drawer from 'material-ui/Drawer';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import { white, } from 'material-ui/styles/colors';








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
    };
  }

  /**
   * change左侧Drawer状态
   */
  onDrawerStateChange = () => this.setState({ open: !this.state.open });


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

        </div>

    );
  }
}

export default AppBarComposition;