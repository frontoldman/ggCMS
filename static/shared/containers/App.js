/**
 * Created by 52913 on 2016/4/9.
 */

import React, { Component , PropTypes } from 'react'
import { connect } from 'react-redux'
import { browerHistory } from 'react-router'
import 'antd/lib/index.css';
import { Row, Col } from 'antd'
import { Navbar, Content} from '../components/layout/'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        return (
            <div className="ant-layout-aside">
                <Navbar/>
                <Content/>
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