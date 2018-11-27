import React, { Component,Fragment } from 'react'
import {Scrolltop} from "./styled"
import topimg from "@as/images/back_top.png"
class ScrollTop extends Component {
    
    render () {
        return (
            <Fragment>
                <Scrolltop onClick={this.props.click}>
                    <img src={topimg}/>
                </Scrolltop>
            </Fragment>
        )
    }

}

export default ScrollTop