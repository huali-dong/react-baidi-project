
import styled from "styled-components"



export  const MainContentBar = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
`


export const MainIcon = styled.div`
    width: 22px;
    height: 22px;
    background: ${props=>`url(${props.url}) center center / 45px 45px no-repeat `}
`