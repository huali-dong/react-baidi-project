import styled from "styled-components"
export const ShopHeaderBox = styled.div`
    background-color: #fff;
    text-align: center;
    padding: 1.68rem 0 2.08rem;
    margin-bottom: .266667rem;
    height:7.733333rem;
    img{
        width: 2.346667rem;
        height: 1.173333rem;
        margin-bottom: .4rem;
    }
    p{
        color: #999;
        font-size: .4rem;
        margin-bottom: .586667rem;
    }
    a{
        height: .906667rem;
        line-height: .906667rem;
        padding: 0 .4rem;
        font-size: .4rem;
        color: #333;
        background-color: #fff;
        border:1px solid #ccc;
        padding: .2rem .26667rem;
    }
`

export const ShopBoxlist= styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;

`
export const ListContent = styled.ul`
    width: 100%;
    height: 100%;
    background:#fff;
    padding-top: 44px;
    >div {
        height: 100%;
    }
`
export const ListItem = styled.li`
    width: 50%;
    padding: 10px;
    display:inline-block;
    border-bottom: 1px solid #f3f3f3;
    img {
        width: 135px;
        height: 135px;
    }
    .name{
            margin: 0 .533333rem .4rem;
            font-size: .32rem;
            color: #666;
    }
    .price{
            font-size: .4rem;
            color: #e72714;
            display:inline-block;
    }
    .country{
            font-size: .32rem;
            color: #666;
            margin-right: .533333rem;
            text-align: right;
            display:inline-block;
            float:right;
    }
`
export const ProductBox  = styled.div`
    .header{
        background: #fff;
        color: #000;
        height: 1.17333rem;
        text-align: center;
        position: relative;
        .left{
            float:left;
            font-size:28px;
            padding-left:0px;
            padding-top:6px;
            display:inline-block;
            width:38px;
        }
        h1{
            line-height: 1.17333rem;
            font-size: .453333rem;
            color: inherit;
            font-weight: 500;
        }
    }
    .product{

    }
`
export const Productdetail = styled.ul`
        background: #fff;
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
        li{
            height: 2.4rem;
            border-bottom: 1px solid #f4f4f4;
            padding: .4rem .266667rem;
            display: flex;
            align-items: center;
            .choose{
                font-size: .533333rem;
                color: #e72714;
            }
            .img{
                position: relative;
                width: 1.6rem;
                height: 1.6rem;
                margin: .4rem .266667rem;
                img{
                    width: 1.6rem;
                    height: 1.6rem;
                    border: 1px solid #f4f4f4;
                }
            }
            .describe{
                flex: 1;
                margin-right: .4rem;
                width:200px;
                .title{
                    height: 2.8em;
                    font-size: .32rem;
                    color: #333;
                }
            }
            .right{
                flex-direction: column;
                width: 1.066667rem;
                height: 1.866667rem;
                align-items: center;
                border: 1px solid #999;
                border-radius: .053333rem;
                text-align: center;
                .add,.reducer{
                    height: .666667rem;
                    font-size:20px;
                    line-height:.666667rem;
                }
            }
        }
`