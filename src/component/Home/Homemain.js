import React, { Component,Fragment } from 'react';
import FriImg from "@as/images/friday.gif";
import Miaosha from "@as/images/maiosha.gif";
import MiaoshaImg from "@as/images/miaosha.png"
import {HomemainContainer} from "./styled";
import Swiper from "swiper"
import connect from "@connect"
class Homemain extends Component{
    constructor(props){
        super(props)
        this.state = {
            list : []
        }
        this.rendswipersilde= this.rendswipersilde.bind(this)
    }
    componentDidMount(){
        //实列化swiper
        this.props.home_actions.getSeconds()
        var mySwiper = new Swiper('.swiper-container',{
            freeMode: true,
            slidesPerView: "auto",
            spaceBetween: 10,
            slidesOffsetAfter: 0,
          });
    }
    componentWillReceiveProps(props,state){
        this.setState({
            list: props.home.seconds
        })
        console.log(this.state.list)
    }
    rendswipersilde(){
        if(!this.state.list) return false;
        return (
            this.state.list.map((item,i)=>(
                <div className="swiper-slide"
                    
                key={i}>
                    <img src={item.pLogo}></img>
                    <div className="name">{item.pName}</div>
                    <div className="price">{item.actPrice}</div>
                    <div className="lowprie">{item.referPrice}</div>
                </div>
            ))
        )
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
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                               {this.rendswipersilde()}
                            </div>
                        </div>
                    </div>
                </HomemainContainer>  
            </Fragment>
        )
    }
}

export default connect(Homemain,[{name: 'home', state: ['swiper','seconds']}])