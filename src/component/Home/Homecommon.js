import React, { Component,Fragment } from 'react'
import connect from "@connect"
import {Commonmodule,CommonImg,Commonswiper} from "./styled"
import axios from "axios"
import Swiper from "swiper"
class Homecommon extends Component {
    constructor(props){
        super(props)
        this.state = {
            img:[],
            list:[],
            link:[],
        }
        this.renderImg= this.renderImg.bind(this);
        this.renderSwiper = this.renderSwiper.bind(this)
    }
  async  componentDidMount(){
        let activityId  = this.props.activityId;
        let imgindex = this.props.imgindex;
        var result;
      await  axios.get("/bda/bd-marketing/api/activity/getProductList",{
            params:{
                startNum:0,
                activityId:activityId,
                _t: Date.now()
            }
        }).then((res)=>{
                result = res.data.data.list;
            }).catch((error)=>{console.log(error)});
        this.setState({
            list: result,
            img : this.props.home.swiper[imgindex].list[0].bannerImg,
            link:this.props.home.swiper[imgindex].list[0].actLink,
        })
        new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            freeMode: true,
            slidesPerView: 0,
            // slidesOffsetAfster: 0,
        })
    }
    renderImg(){
        if(!this.state.img) return false;
        return (
            <a href={this.state.link}>
                <img 
                    src={this.state.img}
                />
            </a>
           
        )
    }
    renderSwiper(){
        return this.state.list.map((item,i)=>{
            return (
                <div className="swiper-slide" key={i} onClick={this.linkdetail()}>
                    <img src={item.itemLogoUrl}></img>
                    <p className="title">{item.itemTitle}</p>
                    <p className="price">￥{item.salePrice}</p>
                </div>
            )
        })
    }
    linkdetail(){
        
    }
    render () {
        return (
            <Fragment>
                <Commonmodule>
                    <CommonImg>
                       {this.renderImg()}
                    </CommonImg>
                    <Commonswiper>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                    {this.renderSwiper()}
                            </div>
                        </div>
                    </Commonswiper>
                </Commonmodule>
            </Fragment>
        )
    }

}

export default connect(Homecommon,[{name:"home",state:["swiper"]}])