import React from 'react';
import {
    blue500, blue700,
    pinkA200, pink500,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import spacing from 'material-ui/styles/spacing'
import { fade } from 'material-ui/utils/colorManipulator';
import Title from './appbar.jsx';
import Theme from '../base/theme.jsx'





const floatActionBarStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',

}

const FloatActionBar = () => {
    return <FloatingActionButton style={floatActionBarStyle}>
        <ContentAdd />
    </FloatingActionButton>
}


// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
const Home = () => (
    <MuiThemeProvider muiTheme={Theme}>
        <div>
            <Title />
            <FloatActionBar />
        </div>
    </MuiThemeProvider>
);

export default Home;