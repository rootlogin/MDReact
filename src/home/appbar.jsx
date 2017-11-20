import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import {white, } from 'material-ui/styles/colors';
    



const Logged = () => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon color={white}/></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarComposition extends Component {

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
          iconElementRight={ <Logged /> }
        />
      </div>
    );
  }
}

export default AppBarComposition;