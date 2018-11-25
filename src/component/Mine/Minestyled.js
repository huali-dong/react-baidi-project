
import styled from "styled-components"

export const MineHeaderContainer = styled.div`
    width: 10rem;
    height: 5.466667rem;
    background: ${props=>`url(${props.img})`};
    background-size: cover;
    .head{
        height:1.17333rem;
        .left{
            float:left;
            height: 1.17333rem;
            line-height: 1.17333rem;
            text-decoration: none;
            font-size: .6rem;
            color: #fff;
            margin-left:20px;
        }
        .right{
            float:right;
            height: 1.17333rem;
            line-height: 1.17333rem;
            text-decoration: none;
            font-size: .6rem;
            color: #fff;
            margin-right:20px;
        }
    }
    .center{
        margin-top: 1.066667rem;
        display: flex;
        .center-left{
            margin-left: .4rem;
            margin-right: .413333rem;
            line-height:1.6rem;
            img{
                display:inline-block;
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 50%;
                border: 1px solid #fff;
            }
            .span{
                position: relative;
                display: inline-block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 3.36rem;
                font-size: .4rem;
                margin-right: .373333rem;
                margin-left:20px;
                color: #fff;
            }
        }
    }
    .bottom{
        .am-notice-bar{
            background: rgba(0,0,0,.1);
            color:#fff;
            font-size: .32rem;
        }
    }
`

export const MineMenuHead = styled.div`
        height: 1.306667rem;
        line-height: 1.306667rem;
        padding: 0 .4rem;
        background-color: #fff;
        border-bottom: 1px solid #e5e5e5;
        position: relative;
        .order-right{
            position:absolute;
            font-size:20px;
            right:20px;
            top:13px;
        }
`

export const NavContainerBar = styled.div`
    margin-top:20px;
`