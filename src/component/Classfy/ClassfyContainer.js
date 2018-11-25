import React, { Component,Fragment } from 'react';
import {
    ClassfyContainerbox,
    ClassfyContainerboxItem,
    ClassfyContainerboxRight,
    ClassfyContainerboxRightLi
} 
from "./Classfystyled"
import arrowImg from "@as/images/zuo.png"

class Classfycontainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            isActive  : false
        }
        this.changeLink = this.changeLink.bind(this)
    }
    changeLink(){

    }
    render(){
        return (
            <Fragment>
               <ClassfyContainerbox>
                   <ul>
                      <ClassfyContainerboxItem>
                          <a>洗护用品</a>
                          <img src={arrowImg}></img>
                      </ClassfyContainerboxItem>
                   </ul>
                   <ClassfyContainerboxRight>
                       <ul>
                        <ClassfyContainerboxRightLi>
                            <img></img>
                            <div>quanbu</div>
                        </ClassfyContainerboxRightLi>
                        <ClassfyContainerboxRightLi>
                            <img></img>
                            <div>quanbu</div>
                        </ClassfyContainerboxRightLi>
                        <ClassfyContainerboxRightLi>
                            <img></img>
                            <div>quanbu</div>
                        </ClassfyContainerboxRightLi>
                       </ul>
                   </ClassfyContainerboxRight>
               </ClassfyContainerbox>
            </Fragment>
        )
    }
}

export default Classfycontainer