import React, { Component,Fragment } from 'react';
import Homeheader from "@c/Home/Homeheader";
import Swiper from "@c/Home/Swiper";
import Nav from "@c/Home/NavContainer";
import Homemain from "@c/Home/Homemain";
import connect from "@connect";
import {HomeBox} from "./styled";
class Home extends Component{
    constructor(props){
        super(props)
         const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.datasource = [] // 替身数据，因为dataSource数据不能加入新数据
        this.state = {
            items: [],
            dataSource, // 数据源
            refreshing: true,// 判断是不是正在刷新的开关
            isLoading: true,// 判断是不是正在加载的开发
            hasMore: true,
            height: document.documentElement.clientHeight,// 屏幕高度
        }
    }
    async componentDidMount(){
        //home页面所有数据同时在这里获取，因为获取数据的先后顺序不一样，可能有些会为空
      await  this.props.home_actions.getSeconds()
        this.props.home_actions.getswiper()
    }
    render(){
        return (
            <Fragment>  
                <Homeheader/>
                <HomeBox ref={el=>this.el=el} className="bscroll">
                    <div className="bscroll-content">
                        <Swiper/>
                        <Nav/>
                         <ListView
                            dataSource={this.state.dataSource}
                            renderFooter={() => (<div style={{ padding: '15px 0px', textAlign: 'center' }}>
                                {this.state.isLoading ? '正在加载...' : (!this.state.hasMore && '没有更多了')}
                            </div>)}
                            renderRow={(rowData, sectionID, rowID) =><Homemain getlist={this.getlist} data={rowData, sectionID, rowID}/>}
                            useBodyScroll={false}
                            pullToRefresh={<PullToRefresh
                                refreshing={this.state.refreshing}
                                onRefresh={this.onRefresh}
                                indicator = {{
                                    activate: '放手就刷新', // 已经扯出来
                                    deactivate: '下拉去刷新', // 没有拉出来
                                    release: '请稍等...', //  开始转
                                    finish: '已经加载了新的数据' // 完成
                                }}
                            />}
                            onEndReached={this.onEndReached}
                            pageSize={5}
                        />
                    </div>
                </HomeBox>
                {/* 要放在scroll的外面，因为如果放在里面的话，点第一下首先是停止动画，第二下才是回到顶部 */}
                { this.state.scrolltopshow ? <ScrollTop click = {this.ScrollTop}></ScrollTop> : "" }
            </Fragment>
        )
    }
}

export default connect(Home,[{name: 'home', state: ['swiper','seconds']}])