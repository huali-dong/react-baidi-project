import React, { Component,Fragment } from 'react';
import { SwriperContainer } from "./styled";
import {  Carousel } from 'antd-mobile';
import connect from "@connect";
class Swiper extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Fragment> 
                <SwriperContainer>
                    <Carousel
                        autoplay={true}
                        dots={false}
                        infinite
                    >
                        {this.renderswiper()}
                    </Carousel>
                   
                </SwriperContainer> 
            </Fragment>
        )
    }
    renderswiper(){
        if(this.props.home.swiper.length>0){
            var  list = this.props.home.swiper[0].list 
        }else{
            return "";
        }
        return list.map((item,i)=>{
            return  <img
                        key={i}
                        src={ item.bannerImg}
                        alt=""
                    />
            }
        )
    }
}

export default connect(Swiper,[{name: 'home', state: ['swiper']}])