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
            activeindex : 0,
            navlist :[],
            datalist :[],
        }
        this.renderClassfyRight = this.renderClassfyRight.bind(this)
        this.rendereClassfyContinerbox = this.rendereClassfyContinerbox.bind(this)
        // this.getItemlist = this.getItemlist.bind(this)
    }
  async  componentWillMount(){
      //请求左边导航栏的数据
          let res =await  axios({
                method:"get",
                url:"/bda/bd-product/api/categ/itemCategList?_t=1543236753070",
                headers:{
                    // 设置请求时候的请求头
                    "A-CID":"BD",
                },
                credentials:"include"
            })
        //请求右边内容的默认数据
        let result =await  axios({
                method:"get",
                url:"/bda/bd-product/api/categ/itemSecondCategList?categId=1&_t=1543241509158",
                headers:{
                    "A-CID":"BD",
                },
                credentials:"include"
            })
            this.setState({
                navlist: res.data.data,
                datalist:result.data.data
            })
    }
    //渲染分类的左边导航部分
    rendereClassfyContinerbox(){
        return this.state.navlist.map((item,i)=>{
            return (
                <ClassfyContainerboxItem
                    key={i}
                    onClick={this.getItemlist.bind(this,i+1)}
                    actives={ this.state.activeindex === i }
                >
                    <a>{item.categName}</a>
                    <img src={arrowImg} ></img>
                </ClassfyContainerboxItem>
            )
        })
    }
    //导航部分的点击事件，每点击一次就更改数据请求，但是要给默认的
    async getItemlist(i){
        let res =await  axios({
            method:"get",
            url:"/bda/bd-product/api/categ/itemSecondCategList?categId="+i+"&_t=1543241509158",
            headers:{
                // 设置请求时候的请求头
                "A-CID":"BD",
            },
            credentials:"include"
        })
        let data=res.data.data
        this.setState({
            datalist:data,
            activeindex :i-1
        })
        this.renderClassfyRight()
    }
    //渲染分类右边的盒子部分
    renderClassfyRight(){
        return this.state.datalist.map((item,i)=>{
            return (
                <ClassfyContainerboxRightLi
                    key={i}
                >
                <img src={item.logourl}></img>
                <div>{item.categName}</div>
            </ClassfyContainerboxRightLi>
            )
        })
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