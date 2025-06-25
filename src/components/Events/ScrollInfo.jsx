import React from 'react'
import styled from 'styled-components'

const ScrollInfo = () => {
  return (
    
<Scrolling>
  <Line></Line>
  <Text>SCROLL DOWN</Text>
</Scrolling>
  )
}


const Scrolling=styled.div`
position: fixed;
top: 8vh;
left: 0;
width: 15%;
height: 92vh;
background: linear-gradient(to right, #fff, transparent);
z-index: 900;
display: flex;
flex-direction: column;
pointer-events: none;
`
const Line=styled.div`
position: absolute;
 width: 5px;
 height: 15vh;
 left: 3vw;
 bottom: 0;
 background: #00293A;
`

const Text=styled.h4`
    rotate: -90deg;
    color:#028D93;
    position: absolute;
    bottom: 24vh;
    left:-2.6vw;
    font-size: 1.3rem;
    text-transform: capitalize;
`

export default ScrollInfo