

// 模拟后端， localStorage模拟数据库
import _ from 'lodash'

const api = {
   addCar({ id,img,name,price,num = 1,}){//模拟后端写接口，添加商品，存到localStorage
        return new Promise(reslove=>{
            setTimeout(async ()=>{
                let { goods }= await this.getgoods()//先取出购物车中所有的商品信息
                // let good =goods.filter((item)=>{
                //         item.id === id
                // })
                 // 判断有没有这个商品
                 let good = _.find(goods, item => item.id === id)
                
                if(good){
                     good.num ++ 
                }else{
                    goods.push({id,img,name,price,num})
                }
                this.updategoods(goods)
                reslove({
                    status:200,
                    goods
                })
            })
        },200)
   },
   getgoods(){//获取用户购物车的所用商品信息
        return new Promise(reslove=>{
            setTimeout(()=>{
                reslove({
                    status:200,
                    goods:localStorage.goods? JSON.parse(localStorage.goods) :[]
                })
            },200)
        })
   },
   updategoods(goods){
       localStorage.goods = JSON.stringify(goods)
   },
   getonegoods(id){
        return new Promise(resolve=>{
            setTimeout(async()=>{
                let {goods} = await this.getgoods()
                // 查找到对应的商品
                let good = _.find(goods, item => item.id === id)
                resolve({
                    status:200,
                    good
                })
            },200)
        })
   },
   controlGoodNumber ({id, control_type}) { // 更改数据库中商品数目
    return new Promise(resolve => {
       setTimeout(async () => {
            let { goods } = await this.getgoods()
            // 查找到对应的商品
            let good = _.find(goods, item => item.id === id)
            good.num += control_type ? 1 : -1
            // 如果商品数量么得了
            if ( good.num <= 0 ) {
                // 去掉该商品
                _.remove(goods, item => item.id === id)
            }
            this.changeCarGoods(goods)
            resolve({
                status: 200,
                goods
            })
       }, 200)
    })
}
}

export default api