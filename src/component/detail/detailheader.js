import React, { Component,Fragment } from 'react'
import {DetailHeaderBox, DetailImgSwiper,Detailgood} from "./styled"
import {  Carousel } from 'antd-mobile'
import axios from "axios"
import {withRouter} from "react-router-dom"
import bus from "@util/bus"
import connect from "@connect"
import Detailfooter from "@c/detail/detailfoot/detailfooter"
class DetailHeader extends Component {
    constructor(props){
        super(props)
        this.state={
            list:"",
        }
        this.renderswiper = this.renderswiper.bind(this)
        this.goback = this.goback.bind(this)
        bus.on("addcar",()=>{//添加商品信息，但是按钮在底部组件，并且是非父子组件，所以用了event/bus
            let options={
                id:this.state.list.itemCode,
                num:1,
                img:this.state.list.imageList[0],
                price:this.state.list.salePrice,
                name:this.state.list.itemTitle
            }
            this.props.detail_actions.addcar(options)
        })
    }
    async componentWillMount(){
        let code  = this.props.location.state.code;
      let res = await axios.get("/bda/bd-product/api/item/itemDetail?itemCode="+code+"&_t=1543319094713")
        .then((res)=>{
            return res;
        })
        this.setState({
            list:res.data.data
        })
    }
    goback(){
        this.props.history.goBack()
    }
    render () {
        let list = this.state.list;
        let discount = ((list.salePrice/list.marketPrice)*10).toFixed(2)
        return (
            <Fragment>
                <DetailHeaderBox>
                    <a onClick={this.goback}><i className="fa fa-chevron-circle-left"></i></a>
                </DetailHeaderBox>
                < DetailImgSwiper>
                    <Carousel
                        autoplay={true}
                        dots={false}
                        infinite
                    >
                        {this.renderswiper()}
                    </Carousel>
                </DetailImgSwiper> 
                <Detailgood>
                    <div className="goodname">
                        {list.itemTitle}
                    </div>
                    <div className="goodprice">
                        <div className="price">￥{list.salePrice}</div>
                        <div className="refprice">￥{list.marketPrice}</div>
                        <div className="discount">{discount}折</div>
                    </div>
                    <div className="describe">
                        <div className="describe-left">{list.country}|{list.warehouseName}</div>
                        <div className="describe-right">{list.deliveryTime}</div>
                    </div>
                    <div className="qualitywrap">
                            <div className="quality">
                                <div className="box">
                                    <div className="icon"></div>
                                    <div className="text">精品正品</div>
                                </div>
                                <div className="box">
                                    <div className="icon"></div>
                                    <div className="text">海外采购</div>
                                </div>
                                <div className="box">
                                    <div className="icon"></div>
                                    <div className="text">快速清关</div>
                                </div>
                                <div className="box">
                                    <div className="icon"></div>
                                    <div className="text">超时赔付</div>
                                </div>
                            </div>
                    </div>
                </Detailgood>
                {(!list.itemCode )?"":<Detailfooter id={list.itemCode}/> }
                
            </Fragment>
        )
    }
    renderswiper(){
        if(this.state.list.length<=0) return false;
        return this.state.list.imageList.map((item,i)=>{
            return  <img
                        key={i}
                        src={item}
                        alt=""
                    />
            }
        )
    }
}

export default withRouter(connect(DetailHeader,[{name:"detail"}]))