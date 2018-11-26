import React, { Component,Fragment } from 'react'
import {ScrollTop} from "./styled"
import topimg from "@as/images/back_top.png"
class Scroll_top extends Component {

    render () {
        return (
            <Fragment>
                <ScrollTop>
                    <img src={topimg}/>
                </ScrollTop>
            </Fragment>
        )
    }

}

export default Scroll_top