import React from 'react'
import FAQ from './FAQ'
import Hblog from './Hblog'
import HeroNew from './Hero/HeroNew'
import HEvents from './HEvents'
import { Analytics } from "@vercel/analytics/react"
import styled, { StyledComponent } from 'styled-components'
import HIntro from './HIntro'
import Footer from 'components/Footer/Footer'
import ScrollToTopH from 'components/ScrollToTopH'

const HomeTag = styled.section`
  position: relative;
  margin-top: 8vh;
  min-height: 92vh;
  background: #fff;
`
const Home = () => {
  return (
    <HomeTag>
        {/* <Hero/> */}
        <HeroNew/>
        {/* <Intro3d/> */}
        <HIntro/>
        {/* <HAbout/> */}
        {/* <Intro/> */}
        {/* <HGallery/> */}
        <ScrollToTopH/>
        <HEvents/>
        <Hblog/>
        <FAQ/>
        {/* <Footer/> */}
        <Footer/>
    
    </HomeTag>
  )
}

export default Home