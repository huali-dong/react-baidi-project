

import styled from "styled-components"

export const HeaderContanier = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 1.173333rem;
    background: #fff;
    z-index: 100;
    display:flex;
    /* justify-content:space-between; */
    line-height:1.173333rem;
    align-items:center;
    .left{
        background:${props=>`url(${props.left}) center center`};
        background-size: cover;
        position: relative;
        width: .506667rem;
        height: .506667rem;
        margin-left: .133333rem;
        text-align:center;
    }
    .center{
        position: relative;
        flex: 1;
        padding: 0 .266667rem;
        .center-left{
            position: absolute;
            background:${props=>`url(${props.search}) center center no-repeat`};
            background-size: .4rem;
            border-right: .026667rem solid #a48b78;
            width: .8rem;
            height: .453333rem;
            margin: .346667rem;
        }
        input{
            width: 100%;
            box-sizing: border-box;
            border: 0;
            border-radius: .133333rem;
            padding: .333333rem .533333rem .24rem 1.333333rem;
            height: .853333rem;
            color: #333;
            background-color: #e5e5e5;
            outline: none;
        }
        a{
            position: absolute;
            width: .4rem;
            height: .4rem;
            top: .346667rem;
            right: .533333rem;
            background: ${props=>`url(${props.close}) center center`};
            background-size: .4rem;
            outline: none;
        }
    }
    .right{
        text-align:center;
        img{
            width: 2.08rem;
            height: .906667rem;
            margin-right: .133333rem;
            margin-top:.32rem;
        }
        
    }
` 


export const SwriperContainer = styled.div`
    width:100%;
    height:5.0133rem;
    margin-top:1.173333rem;
    img{
        width:100%;
        height:5.0133rem;
    }
    .am-carousel {
        height:100% !important;
    }
    .slider-frame{
            height:100% !important;
        }
`

export const NavContanier = styled.div`
    height:6.4rem;
    width:100%;
    display:flex;
    justify-content:space-around;
    .item{
        flex: 1;
        text-align: center;
        color: #888;
    }
    .sub-title {
    color: #888;
    font-size: .373333rem;
    padding: .4rem 0 .24rem .4rem;
    }
    .am-grid{
        width:10rem;
        .am-grid-item{
            height:3.2rem;
            margin-right:.053333rem;
        }
    }
    .am-grid .am-flexbox .am-flexbox-item .am-grid-item-content{
        padding:0rem !important;
    }
    .am-grid.am-grid-square .am-grid-item .am-grid-item-inner-content .am-grid-icon{
        width: 3.946667rem !important;
    }
`

export const HomemainContainer = styled.div`
        margin-top:.266667rem;
        .img{
            img{
                height:3.2rem;
                width:10rem;
            }
        }
        .miaosha{
            img{
                width:10rem;
                height:1.36rem;
            }
        }
        .miaoshaImg{
            display:flex;
            justify-content:space-between;
            height:3.84rem;
            img{
                width:33.3%;
            }
        }
        .timeMiaosha{
            background-color:#fff;
            h2{
                position: relative;
                padding: .266667rem;
                font-size: .32rem;
                font-weight: 500;
                color: #1a1a1a;
                display: flex;
                -ms-flex-align: center;
                align-items: center;
                border-bottom: .026667rem solid #e5e5e5;
                .font{
                    color: #e72714;
                    font-size: .37333rem;
                    font-weight: 700;
                    margin-right: .2rem;
                }
                .tmecell{
                    color: #fff;
                    font-size: .26667rem;
                    background-color: #1a1a1a;
                    border-radius: .026667rem;
                    padding: .026667rem;
                }
                .link{
                    color: #999;
                    position: absolute;
                    right: .266667rem;
                    font-size: .37333rem;
                    color: #666;
                    line-height: .346667rem;
                }
            }
        }
        .swiper-box{
            width:auto;
            height:4.333333rem;
            .swiper-container{
            height:4.333333rem;
            padding-bottom:.4rem;
            position: relative;
            .swiper-wrapper{
                height:100%;
                .swiper-slide{
                    width:3.066667rem;
                    height:3.466667rem;
                    img{
                        width:2.533333rem;
                        height:2.533333rem;
                    }
                    .name{    
                            overflow:hidden;
                            height:.373333rem;
                            color: #999;
                            font-size: .26667rem;
                            margin: .266667rem 0;
                            text-overflow:ellipsis;
                            line-height:.373333rem;
                            width:3.066667rem;
                        }
                    .price{
                        color: #ef2b2f;
                        font-size: .32rem;
                        font-weight: 700;
                        text-align: center;
                        line-height: .266667rem;
                    }
                    .lowprie{
                        text-align:center;
                        text-decoration:line-through;
                        color:#999;
                        font-size:.32rem;
                    }
                }
            }
            
        }
        }
       
`

export const HomeOversears = styled.div`
        margin-top:${props=>props.ismargin ?`.133333rem` : `0rem` };
        width:10rem;
        height:2.933333rem;
        display:flex;
        justify-content:space-between;
        div{
            height:100%;
            img{
                width:5rem;
            }
        }
`
export const Isreal = styled.div`
        width:10rem;
        height:1.6rem;
        img{
            width:10rem;
            height:1.6rem;
        }
`
export const Commonmodule = styled.div`

`
export const CommonImg = styled.div`
    img{
        width:100%;
        height: 3.73333rem;
    }
`
export const Commonswiper = styled.div`
    .swiper-container{
        height:4.8rem;
        width:100%;
        .swiper-slide{
            width:3.52rem;
            img{
            width:3.52rem;
            height:3.52rem;
        }
        .title{
            margin-top:.08rem;
            color: #cbcbcb;
            overflow:hidden;
            width:3.52rem;
            height:.346667rem;
            font-size:.266667rem;
            text-overflow:ellipsis;
            white-space:nowrap;
        }
        .price{
            width:3.52rem;
            height:.613333rem;
            padding: .106667rem 0;
            color: #e72714;
    }
    }
}
`