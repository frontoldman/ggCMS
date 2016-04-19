/**
 * Created by 52913 on 2016/4/9.
 */

import React, { Component , PropTypes } from 'react'
import { connect } from 'react-redux'
import { browerHistory } from 'react-router'
import 'antd/lib/index.css';
import { Row, Col } from 'antd'

class　App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        return (
            <div>
                <Row>
                    <Col span="3">.col-6</Col>
                    <Col span="21">{children}</Col>
                </Row>
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