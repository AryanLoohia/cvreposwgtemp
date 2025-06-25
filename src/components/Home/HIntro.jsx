import Intro from 'components/About/Intro'
import React from 'react'
import styled from 'styled-components'

const HIntro = () => {
  return (
    <IntroSec>
        <Contents>
        <Intro/>
        </Contents>
    </IntroSec>
  )
}
const IntroSec=styled.section`
    position: relative;
    height: auto;
    padding-top: 2vh;
    width: 100vw;
    margin-bottom: 2vh;
`
const Contents =styled.div`
  position: relative;
  margin-top: 0vh;
  margin-bottom: 5vh;
  z-index: 100;
`
export default HIntro