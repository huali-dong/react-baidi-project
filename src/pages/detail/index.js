import React, { Component,Fragment } from 'react'
import DetailHeader from "@c/detail/detailheader"
import {withRouter} from "react-router-dom"
class Detail extends Component {
    componentWillMount(){
    }
    render () {
        return (
            <Fragment>
                <DetailHeader {...this.props}/>
            </Fragment>
        )
    }

}

export default withRouter(Detail)