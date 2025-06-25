import ESlider from 'components/Home/Events/ESlider'
import React from 'react'
import styled from 'styled-components'

const ECarousel = () => {
  return (
    <EventSec>
        <H2>SWG Initiatives</H2>
        <ESlider/>
    </EventSec>
  )
}

const EventSec=styled.section`
    position: relative;
    height: auto;
    @media (max-width: 600px){
      H2{
        font-size: 3rem;
        padding-bottom: 0px;
        line-height: 1;
      }
    }
`

const H2=styled.h2`
padding: 2rem;
margin-top: 5vh;
margin-top: 0px;
padding-top:0px;
text-align:center;
align-items: center;
font-size: 4rem;
font-weight: 700;
color: #00293A;
`

export default ECarousel;