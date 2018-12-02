import React, { Component,Fragment } from 'react';
import FriImg from "@as/images/friday.gif";
import Miaosha from "@as/images/maiosha.gif";
import MiaoshaImg from "@as/images/miaosha.png"
import {HomemainContainer,Isreal} from "./styled";
import Homecommon from "./Homecommon"
import Homeoverseas from "./Homeoverseas"
import Swiper from "swiper"
import connect from "@connect"
class Homemain extends Component{
    constructor(props){
        super(props)
        this.state = {
            list : [],
            isreal:[],
            num :[9,11,13,15,17,19,21]
        }
        this.rendswipersilde= this.rendswipersilde.bind(this);
        this.renderHomecommon = this.renderHomecommon.bind(this)
    }
    componentDidMount(){
        //实列化swiper
        new Swiper('.swiper-container',{
            autoplay: true,
            freeMode: true,
            slidesPerView: 0,
            slidesOffsetAfter: 0,
            spaceBetween:30,
          });
    }
    componentWillReceiveProps(props,state){
        if(props.home.swiper.length>0){
            this.setState({
                list: props.home.seconds,
                isreal:props.home.swiper[8].list[0].bannerImg
            })
        }else{
            return false;
        } 
    }
    rendswipersilde(){
        if(!this.state.list) return false;
        return (
            this.state.list.map((item,i)=>(
                <div className="swiper-slide"
                key={i}>
                    <img src={item.pLogo}></img>
                    <div className="name">{item.pName}</div>
                    <div className="price">￥{item.actPrice}
                    &nbsp;
                        <i className="fa fa-plus-circle"></i>
                    </div>
                    <div className="lowprie">{item.referPrice}</div>
                </div>
            ))
        )
    }
    renderHomecommon(){
        if(this.props.home.swiper.length>0){
            return(
                this.state.num.map((item,i)=>{
                    return (
                         <Homecommon key={i} imgindex = {item}  activityId={this.props.home.swiper[item+1].list[0].activityId}></Homecommon>
                    )
                })
            )
        }else{
            return "";
        }


    }
    render(){
        return (
            <Fragment>
                <HomemainContainer>   
                    <div className="img">
                        <img src={FriImg} />
                    </div>
                    <div className="miaosha">
                        <img src={Miaosha}></img>
                    </div>
                    <div className="miaoshaImg">
                        <img src={MiaoshaImg}></img>
                        <img src={MiaoshaImg}></img>
                        <img src={MiaoshaImg}></img>
                    </div>
                    <div className="timeMiaosha">
                        <h2>
                            <span className="font">限时秒杀</span>
                            <span className="tmecell">21</span>
                            <span>:</span>
                            <span className="tmecell">21</span>
                            <span>:</span>
                            <span className="tmecell">21</span>
                            <a className="link">更多秒杀</a>
                            <i></i>
                        </h2>
                        <div className="swiper-box">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                     {this.rendswipersilde()}
                                </div>
                            </div>
                        </div>
                    </div>
                </HomemainContainer> 
                <Homeoverseas></Homeoverseas> 
                <Isreal>
                    <img src={this.state.isreal}></img>
                </Isreal>
                {
                    this.renderHomecommon()
                }
               
            </Fragment>
        )
    }
}

export default connect(Homemain,[{name: 'home', state: ['swiper','seconds']}])