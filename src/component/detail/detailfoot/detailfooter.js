import React, { Component,Fragment } from 'react'
import {Detailfoot} from "./styled"
import bus from "@util/bus"
import connect from "@connect"
class Detailfooter extends Component {
    constructor(props){
        super(props)
        this.state={
            num:0
        }
        this.addCar = this.addCar.bind(this)
        this.getNum = this.getNum.bind(this)
    }
    async componentDidMount(){
       this.getNum()
    }
    //
   async getNum(){//获取数量
        await this.props.detail_actions.getonegoods(this.props.id)
        console.log(this.props)
        if(!this.props.detail.detail) return false;//如果刚开始localStorage没有该商品
         this.setState({
             num:this.props.detail.detail.num 
         })
    }
    addCar(){
        bus.emit("addcar")
        this.getNum()
    }
    render () {
        return (
            <Fragment>
                <Detailfoot>
                    <div className="cart">
                        <i ref={el=>this.el=el} className="mount">{this.state.num}</i>
                    </div>
                    <div className="options">
                        <div className="gocar" onClick={this.addCar}>加入购物车</div>
                        <div className="buy">直接购买</div>
                        <div className="collection"></div>
                    </div>
                </Detailfoot>
            </Fragment>
        )
    }

}

export default connect(Detailfooter,[{name:"detail"}])