import React, { Component,Fragment } from 'react'
import {ShopHeaderBox} from "./styled"
import shopcar from "@as/images/shopcar.png"
class ShopHeader extends Component {
    render () {
        return (
            <Fragment>
                <ShopHeaderBox>
                    <img src={shopcar}></img>
                    <p>你的购物车空空如也.....</p>
                    <a>去逛逛</a>
                </ShopHeaderBox>
            </Fragment>
        )
    }

}

export default ShopHeader