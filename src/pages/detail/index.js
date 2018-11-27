import React, { Component,Fragment } from 'react'
import DetailHeader from "@c/detail/detailheader"
import Detailfooter from "@c/detail/detailfoot/detailfooter"
import {withRouter} from "react-router-dom"
class Detail extends Component {
    componentWillMount(){
        console.log(this.props)
    }
    render () {
        return (
            <Fragment>
                <DetailHeader {...this.props}/>
                <Detailfooter/>
            </Fragment>
        )
    }

}

export default withRouter(Detail)