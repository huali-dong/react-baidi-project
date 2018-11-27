import React, { Component,Fragment } from 'react'
import {Detailfoot} from "./styled"
class Detailfooter extends Component {
    constructor(props){
        super(props)
        this.addCar = this.addCar.bind(this)
    }

    addCar(){
        
    }
    render () {
        return (
            <Fragment>
                <Detailfoot>
                    <div className="cart">
                        <i className="mount">0</i>
                    </div>
                    <div className="options">
                        <div className="gocar" >加入购物车</div>
                        <div className="buy">直接购买</div>
                        <div className="collection"></div>
                    </div>
                </Detailfoot>
            </Fragment>
        )
    }

}

export default Detailfooter