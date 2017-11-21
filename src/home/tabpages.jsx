import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import HomePage from './homepage.jsx';


const styles = {
    home: {
        padding: 10,
    },
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


class TabPages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        }
    }

    onTabChecked = (value) => {
        this.setState({
            tabIndex: value,
        });
    };

    render() {
        return (
            <div>
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
                    <div style={styles.home}>
                        <HomePage />
                    </div>


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

};

export default TabPages;