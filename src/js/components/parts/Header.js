import React from 'react'
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Header extends React.Component {

    render() {
        return(
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <AppBar title="Car Stack" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
            </MuiThemeProvider>
        )
    }
};



export default Header;