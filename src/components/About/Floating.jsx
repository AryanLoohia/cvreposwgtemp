import React from 'react'
import styled, { keyframes } from 'styled-components'
import astronaut from "../../assets/spaceman.png"


const Floating = () => {
  return (
    <Spaceman>
    <img src={astronaut} alt="spaceman" />
</Spaceman> 
  )
}


const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 5%;
left: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
export default Floating