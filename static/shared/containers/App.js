/**
 * Created by 52913 on 2016/4/9.
 */

import React, { Component , PropTypes } from 'react'
import { connect } from 'react-redux'
import { browerHistory } from 'react-router'
import 'antd/lib/index.css';
import { Navbar, Content} from './layout/'

class App extends Component {
    constructor(props) {
        super(props);
    }

    renderLayout() {
        const { children, history } = this.props;
        return (
            <div className="ant-layout-aside">
                <Navbar />
                <Content children={children}/>
            </div>
        )
    }

    renderLogin() {
        const { children, history } = this.props;
        return (
            <div>{children}</div>
        )
    }

    render() {
        const { location } = this.props;

        switch(location.pathname){
            case '/login':
                return this.renderLogin();
            break;
        }

        return this.renderLayout();
    }
}

App.propTypes = {
    // Injected by React Redux
    errorMessage: PropTypes.string,
    // Injected by React Router
    children: PropTypes.node
}

function mapStateToProps(state, ownProps){
    return {
        ...state
    }
}

export default connect(mapStateToProps)(App)