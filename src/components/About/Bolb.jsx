import React from 'react'
import styled from 'styled-components'

const Bolb = () => {
  return (
    <BolbTag></BolbTag>
  )
}

const BolbTag=styled.div`
    width: 42vw;
    height: 42vw;
    position: fixed;
    background: linear-gradient(to right, #F44E77, #16194F);
    z-index: 0;
    border-radius: 50%;
    right: 0;
    top: 13vh;
    overflow: hidden;
`

export default Bolb