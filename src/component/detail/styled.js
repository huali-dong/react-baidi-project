import styled from "styled-components"
import border from "@as/images/border.png"
export const DetailHeaderBox = styled.div`
    height:44px;
    background-color:#fff;
    color:#000;
    position:relative;
    text-align:float;
    border-bottom:1px solid #000;
    i{
        font-size:30px;
        margin-left:20px;
        line-height:44px;
    }
`

export const DetailImgSwiper = styled.div`
    height:375px;
    width:100%;
    .am-carousel {
        height:100% !important;
    }
    .slider-frame{
            height:100% !important;
        }
`
export const Detailgood = styled.div`
    height:145px;
    padding:0.4rem;
    background-color:#fff;
    .goodname{
            overflow: hidden;
            font-size: .4rem;
            color: #333;
            font-weight: 700;
            flex: 1;
            padding-right: .266667rem;
            padding-bottom: .266667rem;
            margin-bottom: .4rem;
            border-bottom: 1px solid #333;
    }
    .goodprice{
        display:flex;
        align-items:center;
        .price{
            color: #e72714;
            font-size: .77333rem;
        }
        .refprice{
            padding: 0 .266667rem;
            background-color: #fff;
            border-radius: 0 .8rem .8rem 0;
            font-size: .32rem;
            color: #666;
            text-decoration:line-through;
        }
        .discount{
            text-align: center;
            color: #e72714;
            font-size: .32rem;
            background: url(${border});
            background-size: 1rem .386667rem;
            width: 1rem;
            height: .386667rem;
            line-height: .386667rem;
        }
    }
    .describe{
        display:flex;
        align-items:center;
        margin: .4rem 0 0 .053333rem;
        .describe-left{
            font-size: .34667rem;
            color: #666;
            margin-right: .4rem;
        }
        .describe-right{
            font-size: .34667rem;
            color: #666;
            margin-right: .4rem;
            text-align:right;
        }
    }
    .qualitywrap{
        padding: .533333rem .4rem .4rem;
        background-color: #fff;
        .quality{
            color: #fff;
            font-size: .32rem;
            background-color: #dbdbdb;
            height: 1.2rem;
            line-height: 1.2rem;
            padding: 0 .533333rem;
            text-align: center;
            .box{
                display: inline-block;
                margin-right: .533333rem;
                .icon{
                    display: inline-block;
                    width: .08rem;
                    height: .24rem;
                    background-color: #fff;
                    margin-right:5px;
                }
                .text{
                    display: inline-block;
                    font-size: .32rem;
                    height: .48rem;
                }
            }
        }
    }
`

