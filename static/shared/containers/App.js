/**
 * Created by 52913 on 2016/4/9.
 */

import React, { Component , PropTypes } from 'react'
import { connect } from 'react-redux'
import { browerHistory } from 'react-router'

class　App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        return (
            <div>
                <h1>hello</h1>
                {children}
            </div>
        )
    }
}

App.propTypes = {
    // Injected by React Redux
    errorMessage: PropTypes.string,
    // Injected by React Router
    children: PropTypes.node
}

export default connect(state => state)(App)