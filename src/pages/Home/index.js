import React, { Component,Fragment } from 'react';
import Homeheader from "@c/Home/Homeheader";
import Swiper from "@c/Home/Swiper";
import Nav from "@c/Home/NavContainer";
import Homemain from "@c/Home/Homemain"
class Home extends Component{
    render(){
        return (
            <Fragment>  
                <Homeheader/>
                <Swiper/>
                <Nav/>
                <Homemain/>
            </Fragment>
        )
    }
}

export default Home