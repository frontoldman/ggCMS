/**
 * Created by 52913 on 2016/4/10.
 */

import React , { Component , PropTypes } from 'react'
import { connect } from 'react-redux'


class BlogPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                BlogPage
            </div>
        )
    }
}

export default connect()(BlogPage)