import React from 'react'
import Header from './parts/Header'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CarEntries from './parts/CarEntries'




class CarApp extends React.Component {

    constructor() {
        super();

    }


    render() {
        return(
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Header/>
            </MuiThemeProvider>
        );

    };

}


module.exports = CarApp;