import React, { Component,Fragment } from 'react';
import {
    ClassfyContainerbox,
    ClassfyContainerboxItem,
    ClassfyContainerboxRight,
    ClassfyContainerboxRightLi,
} 
from "./Classfystyled";
import arrowImg from "@as/images/zuo.png";
import axios from "axios"

class Classfycontainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            isActive  : false
        }
        this.renderClassfyRight = this.renderClassfyRight.bind(this)
        this.rendereClassfyContinerbox = this.rendereClassfyContinerbox.bind(this)
    }
    componentDidMount(){
        axios.get("/bda/bd-product/api/categ/itemCategList?_t=1543203592486")
        .then((res)=>{
            console.log(res)
        }).catch((result)=>{
            console.log(result)
        })
    }
    rendereClassfyContinerbox(){
        return(
            <ClassfyContainerboxItem>
                <a>洗护用品</a>
                <img src={arrowImg}></img>
            </ClassfyContainerboxItem>
        )
    }
    renderClassfyRight(){
        return (
            <ClassfyContainerboxRightLi>
                <img></img>
                <div>quanbu</div>
            </ClassfyContainerboxRightLi>
        )
    }
    render(){
        return (
            <Fragment>
               <ClassfyContainerbox>
                   <ul>
                     {this.rendereClassfyContinerbox()}
                   </ul>
                   <ClassfyContainerboxRight>
                       <ul>
                           {this.renderClassfyRight()}
                       </ul>
                   </ClassfyContainerboxRight>
               </ClassfyContainerbox>
            </Fragment>
        )
    }
}

export default Classfycontainer