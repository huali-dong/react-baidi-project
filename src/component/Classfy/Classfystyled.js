import styled from "styled-components"
export const ClassfySearchContainer= styled.div`
    width:100%;
    height:1.733333rem;
    .searchs{
        background: #fff;
        padding: .4rem;
        height: 1.706667rem;
        position: relative;
        border-bottom: .053333rem solid #f4f4f4;
        display: flex!important;
        align-items: center;
        form{
            width: 100%;
            height: .906667rem;
            background: #f4f4f4;
            padding: 0 .266667rem;
            border-radius: .026667rem;
            .search{
                width: .933333rem;
                font-size: .533333rem;
                text-align: center;
                padding-right: .133333rem;
            }
            input{
                width: 80%;
                background: transparent;
                border: 0;
                padding: .266667rem;
                color: #000;
                outline: none;
            }
            .close{
                position: absolute;
                width: .426667rem;
                height: .426667rem;
                top: .533333rem;
                right: .586667rem;
                outline: none;
                font-size:.48rem;
            }
        }
    }
`

export const  ClassNavContainer = styled.ul`
    background: #fff;
    height: 1.28rem;
    line-height: 1.173333rem;
    border-bottom: .026667rem solid #e5e5e5;
    border-top: .026667rem solid #e5e5e5;
    list-style: none;
    text-align: center;
    display:flex;
`

export const  ClassfyContainerBar = styled.li`
    flex: 1;
    height: 1.28rem;
    a{
        display: inline-block;
        height: .933333rem;
        width: 1.2rem;
        color:  ${props=>props.active ? '#e72714' : '#999'};
        border-bottom:${props=>props.active ? '.026667rem solid #e72714' :''} ;
    }
`
export const ClassfyContainerbox = styled.div`
    align-items: flex-start;
    margin-bottom: .533333rem;
    display:flex;
    ul{
        width: 1.866667rem;
        text-align: center;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        list-style:none;
    }
`

export const ClassfyContainerboxItem = styled.li`
        position: relative;
        list-style: none;
        width: 1.866667rem;
        line-height: 1.733333rem;
        font-size: .373333rem;
        a{
            color:${props=>props.actives?"#e72714" : "#000"};
            font-size: .37333rem;
            border-bottom: ${props=>props.actives?"2px solid #e72714" : ""};
        }
        img{
            display: ${props=>props.actvies?"block":"none"};
            position: absolute;
            width: .213333rem;
            height: .453333rem;
            right: 0;
            top: .666667rem;
        }
`
export const ClassfyContainerboxRight = styled.div`
    width: 8.133333rem;
    padding: .4rem .4rem .266667rem;
    background-color:#fff;
    position: relative;
    ul{
        list-style:none;
        margin:0;
        padding:0;
        width:100%;
        background-color:#fff;
    }
`
export const ClassfyContainerboxRightLi = styled.li`
        width: 2.4rem;
        list-style: none;
        text-align: center;
        display: inline-block;
        font-size: .32rem;
        color: #999;
        margin-bottom: .72rem;
        img{
            width: 1.32rem;
            height: 1.32rem;
            margin-bottom: .32rem;
        }
        div{

        }
`

export const BrandName = styled.div`
    height: 1.04rem;
    line-height: 1.04rem;
    color: #666;
    font-size: .37333rem;
    padding-left: .426667rem;
`
export const BrandImg = styled.ul`
        border:none;
        font-size:0;
        background-color:#fff;
        li{
            width: 3.306667rem;
            height: 3.333333rem;
            display: inline-block;
            box-sizing: border-box;
            border-bottom: 2px solid #f4f4f4;
            border-right: 1px solid #f4f4f4
        }
        img{
            width:100%;height:100%;
        }
`