import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Entry extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Card>
                    <CardHeader
                        title={this.props.username}
                        subtitle="Green Bay"
                        avatar="http://lorempixel.com/100/100/nature/"
                    />
                    <CardMedia>
                        <img src="http://lorempixel.com/600/337/nature/" />
                    </CardMedia>
                    <CardTitle title={this.props.title} />
                    <CardText>
                        {this.props.description}
                    </CardText>
                    <CardActions>
                        <FlatButton label="Like" />
                        <FlatButton label="Share" />
                    </CardActions>
                </Card>
            </MuiThemeProvider>
        );
    }
}

export default Entry;