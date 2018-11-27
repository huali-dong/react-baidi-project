import styled from "styled-components"
import car from "@as/images/Car.png"
import collection from "@as/images/collection.png"
export const Detailfoot = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1.6rem;
    background: #fff;
    z-index: 4;
    border-top: 1px solid #e5e5e5;
    display:flex;
    align-items:center;
    .cart{
        position: relative;
        width: 1.893333rem;
        height: 1.2rem;
        background: url(${car}) no-repeat 50% 50%;
        background-size: 35px;
        .mount{
            position: absolute;
            top: .08rem;
            right: .4rem;
            color: #fff;
            background-color: #e72714;
            padding: 0 .106667rem;
            font-size: .26667rem;
            font-style: normal;
            border-radius: 50%;

        }
    }
    .options{
        display:flex;
        align-items:center;
        flex:1;
        .gocar{
            width: 2.933333rem;
            margin-right: .293333rem;
            background-color: #ff911d;
            height: 1.066667rem;
            color: #fff;
            font-size: .42667rem;
            text-align:center;
            line-height:1.066667rem;
        }
        .buy{
            width: 2.933333rem;
            margin-right: .293333rem;
            background-color: #e72714;
            height: 1.066667rem;
            color: #fff;
            font-size: .42667rem;
            text-align:center;
            line-height:1.066667rem;
        }
        .collection{
            display:block;
            width: .533333rem;
            height: .533333rem;
            margin:auto;
            background: url(${collection}) no-repeat;
            background-size: .533333rem .533333rem;
        }
    }
`