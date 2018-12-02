import React, { Component,Fragment } from 'react'
import {ProductBox,Productdetail} from "./styled"
class ProductCar extends Component {

    render () {
        return (
            <Fragment>
                <ProductBox>
                    <div className="header">
                        <i className="left fa fa-angle-left"></i>
                        <h1>购物车</h1>
                    </div>
                    <div className="product">
                        <Productdetail>
                            <li>
                                <div className="choose fa fa-check-circle"></div>
                                <div className="img">
                                    <img></img>
                                </div>
                                <div className="describe">
                                    <div className="title">nisk</div>
                                    <div className="price">￥165</div>
                                </div>
                                <div className="right">
                                        <div className="add">+</div>
                                        <div className="num">1</div>
                                        <div className="reducer">_</div>
                                </div>
                            </li>
                        </Productdetail>
                    </div>
                </ProductBox>
            </Fragment>
        )
    }

}

export default ProductCar