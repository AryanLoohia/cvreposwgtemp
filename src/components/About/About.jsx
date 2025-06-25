import Footer from 'components/Footer/Footer'
import ScrollToTop from 'components/ScrollToTop'
import React from 'react'
import styled from 'styled-components'
import Intro from './Intro'
import Teamtabs from './Teamtabs'

const AboutTag=styled.section`
  position: relative;
  margin-top: 8vh;
  animation-name: example;
  animation-duration: 1.6s;
  @keyframes example {
    0%  { left:0px; top:50px;}
    100% { left:0px; top:0px;}
  }
  hr{
    margin:auto;
    width:50%;
  }
  .team-head-text{
    font-size:42px;
    font-weight:900;
    text-align:center;
  }
  @media (max-width:600px)
  {
    .team-head-text{
      font-size:36px;
    }
  }
    .team-head-text{
        /* color: #0e7490; */
        color: #00293A;
    line-height:50px;
    width:100%;
    margin: 30px 0px 30px 0px;
  }
`
const About = () => {
  return (
    <AboutTag>
        <Intro/>
        <hr/>
        <p className="text-blk team-head-text" id='team'>Our Team</p>
        <Teamtabs />
        <Footer/>
        <ScrollToTop/>
    </AboutTag>
  )
}

export default About