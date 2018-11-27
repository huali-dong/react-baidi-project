import React, { Component,Fragment } from 'react'
import {BrandName,BrandImg} from "./Classfystyled"
import axios from "axios"
import { Toast } from 'antd-mobile';
class ClassfyBrand extends Component{
    constructor(props){
        super(props)
        this.state={
            datalist :[],
        }
        this.renderImg = this.renderImg.bind(this)
    }
    async componentWillMount(){
        var result;
        await  axios.get("/bda/bd-product/api/brand/getAllShowBrand?pageSize=200&_t=1543243201483")
            .then((res)=>{
                result =res.data.data.list
            }).catch((err)=>{console.log(err)});
            this.setState({
                datalist:result
            })
    }
    componentDidMount(){
        Toast.loading('Loading...', 3, () => {
            this.renderImg()
          });
    }
    renderImg(){
        return this.state.datalist.map((item,i)=>{
            return (
                    <li
                     key={i}
                     >
                        <img src={item.brandLogo}/>
                    </li>
            )
        })
    }
    render(){
        return (
            <Fragment>
                <BrandName>
                    热门品牌
                </BrandName>
                <BrandImg>
                    {this.renderImg()}
                </BrandImg>
            </Fragment>
        )
    }
}

export default ClassfyBrand