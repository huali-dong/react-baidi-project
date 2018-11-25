import React, { Component,Fragment } from 'react';
import FriImg from "@as/images/friday.gif";
import Miaosha from "@as/images/maiosha.gif";
import MiaoshaImg from "@as/images/miaosha.png"
import {HomemainContainer} from "./styled";
import connect from "@connect"
class Homemain extends Component{
    componentDidMount(){
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
                        <ul>
                            <li>
                                <a>
                                    <div className="img"><img></img></div>
                                    <div className="name"></div>
                                    <div className="price"></div>
                                    <div className="lowprie"></div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </HomemainContainer>  
            </Fragment>
        )
    }
}

export default connect(Homemain,[{name: 'home', state: ['swiper']}])