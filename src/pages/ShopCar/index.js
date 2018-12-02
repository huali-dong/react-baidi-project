import React, { Component,Fragment } from 'react'
import ShopCarBox from "@c/ShopCar/ShopCar"
import ProductCar from "@c/ShopCar/ProductCar"
import connect from "@connect"
import { timingSafeEqual } from 'crypto';
class ShopCar extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
        this.state={
            listgoods:[],
        }
    }
    async  componentWillMount(){
      await  this.props.detail_actions.getgoods()//从localStorage中获取所有商品信息到store中
        this.setState({
            listgoods:this.props.detail.goods
        })
    }
    
    render () {
        // console.log(this.state)
        return (
            <Fragment>
                <ShopCar/>
                {/* {this.state.listgoods.length>0? <ProductCar/>:  <ShopCarBox/>} */}
            </Fragment>
        )
    }

}

export default connect(ShopCar,[{name:"detail"}])