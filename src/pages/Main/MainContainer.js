import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { MainContentBar,MainIcon }  from "./Mainstyled"
import { withRouter } from "react-router-dom"
import uuid from "uuid"

import HomeContanier from "@pages/Home";
import ClassfyContainer from "@pages/Classfy";
import MineContainer from "@pages/Mine";
import ShopCarContainer from "@pages/ShopCar"

import Home from "@as/images/Home.png"
import HomeActive from "@as/images/HomeActive.png"
import Mine from "@as/images/Mine.png"
import MineActive from "@as/images/MineActive.png"
import Classfy from "@as/images/Classfy.png"
import ClassfyActive from "@as/images/ClassfyActive.png"
import CarActive from "@as/images/CarActive.png"
import Car from "@as/images/Car.png"

class MainContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: '/home',
            tabItem :[
                {id:uuid, title :"首页",component:<HomeContanier/>, icon:{default : Home,active :HomeActive},select:"/home"},
                {id:uuid, title :"分类",component:<ClassfyContainer/>, icon:{default : Classfy,active :ClassfyActive},select:"/classfy" },
                {id:uuid, title :"购物车",component:<ShopCarContainer/>,icon:{default : Car,active :CarActive},select:"/car" },
                {id:uuid, title :"我的",component:<MineContainer/>,icon:{default : Mine,active : MineActive},select:"/mine" }
            ]
        };
      }

      renderContent() {
        let {tabItem : tab} = this.state
            return tab.map( tab => (
                <TabBar.Item
                        key={tab.id}
                        icon={<MainIcon url = {tab.icon.default }/> }
                        selectedIcon={<MainIcon url = {tab.icon.active}/>}
                        title={tab.title}
                        selected={this.state.selectedTab === tab.select}
                        onPress={() => {
                        this.setState({
                            selectedTab: tab.select,
                        });
                        }}
                    >
                {tab.component}
              </TabBar.Item>
            ))
           
      }
      componentDidUpdate(props,state){
          let { selectedTab : _tab } = state//旧得
          let {selectedTab : tab } = this.state //新的
          if( _tab !== tab && _tab === "/classfy" ){
              this.props.history.replace("/")
          }
      }
      render() {
        return (
          < MainContentBar >
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#F74444"
              barTintColor="white"
              tabBarPosition="bottom"
            >
            {this.renderContent()}
            </TabBar>
          </MainContentBar>
        );
      }
    
}

export default withRouter(MainContainer) 