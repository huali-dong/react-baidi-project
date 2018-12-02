import React, { Component,Fragment } from 'react'
import {ShopHeaderBox,ShopBoxlist,ListContent,ListItem} from "./styled"
import shopcar from "@as/images/shopcar.png"
import { PullToRefresh, ListView, Button } from 'antd-mobile'
import {withRouter} from "react-router-dom"
import axios from "axios"
import ScrollToTop from "@c/common/scroll"
class ShopBox extends Component {
    constructor(props) {
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
            startNum:0,//获取数据的开始数
            height: document.documentElement.clientHeight,// 屏幕高度
            isToback:false
        }
    }
    getDataAsync(num){

        return axios.get("/bda/bd-marketing/api/activity/getProductList?activityId=1701031131360001&startNum="+this.state.startNum+"&_t=1543395355090")
            .then(res => {
                // 获取到对应页数的数据
                // 获取之后增加页面
                let data = res.data.data.list
                this.datasource = [...this.datasource, ...data] // 给替身添加数据
                // 如果没有数据了
                // if ( this. >= res.data.data.length ) {
                //     this.setState({ hasMore: false })
                // }  
                return data;
            })
    }
    componentDidMount(){
        this.handerData()
    }
    async handerData(){//获取数后处理真正的数据
        let data = await this.getDataAsync();
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.datasource),
            refreshing: false,
            isLoading: false,
            startNum:this.state.startNum+10
        })
    }
    renderItem(rowData, sectionID, rowID){
        return(
                    
                <ListItem className="list" key = {rowID}  onClick={this.toDetail.bind(this,rowData.itemCode)}> 
                    <img src = {rowData.itemLogoUrl}/>
                    <div className="name" >{rowData.itemTitle}</div>
                    <div className="price">￥{rowData.salePrice}</div>
                    <div className="country">{rowData.country}</div>
                </ListItem>
        )
    }
    toDetail(code){
        this.props.history.push("/detail",{code:code})
    }
    onRefresh = () => { // 下拉刷新的逻辑
        this.setState({ refreshing: true, isLoading: true })
        // 因为是下拉属性，相当于要重新获取数据，重置页数...
        if (!this.state.hasMore) this.setState({ hasMore: true })
        this.handerData()

    }; 
    onEndReached = (event) => { // 上拉加载的逻辑
        if (this.state.isLoading) {
          return;
        }
        this.setState({ isLoading: true });
        this.handerData()
    };
    renderHeader(){
        return(
            <ShopHeaderBox>
                <img src={shopcar}></img>
                <p>你的购物车空空如也.....</p>
                <a>去逛逛</a>
            </ShopHeaderBox>
        )
    }
    scrollTop(e){
        //listView属性里的回调函数,e是当前event事件，目前没有找到好的获取当前元素滚动的位置的方法，
        // console.log(e.target.scrollTop)
        // console.log(this.lv)
        if(e.target.scrollTop>500){
            this.updateisToback()
        }
    }
    updateisToback(){
        this.setState({
            isToback:!this.state.isToback
        })
    }
    scrollToBack(){
        this.lv.scrollTo(0,0,0)
        this.updateisToback()
    }
    render () {
        return (
            <Fragment>
                <ShopBoxlist>
                    <ListContent>
                     <ListView
                         ref={el => this.lv = el}
                        dataSource={this.state.dataSource}
                        renderHeader={()=>this.renderHeader()}
                        renderFooter={() => (<div style={{ padding: '15px 0px 50px 0px', textAlign: 'center' }}>
                            {this.state.isLoading ? '正在加载...' : (!this.state.hasMore && '没有更多了')}
                        </div>)}
                        renderRow={(rowData, sectionID, rowID) => this.renderItem(rowData, sectionID, rowID)}
                        useBodyScroll={false}
                        onScroll={e=>this.scrollTop(e)}
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
                    </ListContent>
                    {this.state.isToback ? <ScrollToTop click={this.scrollToBack.bind(this)}/>:"" }
                </ShopBoxlist>
            </Fragment>
        )
    }

}

export default withRouter(ShopBox)