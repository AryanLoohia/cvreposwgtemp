import Footer from 'components/Footer/Footer'
import React from 'react'
import styled from 'styled-components'
import REvents from './REvents'
import ScrollInfo from './ScrollInfo'
import WorkPage from './WorkPage'

const EPage=styled.section`
  width: 100vw;
  height: auto;
  display: flex;

  .EResponsive{
    display: none;
    opacity: 0;
  }
  .Elaptop{
    opacity: 1;
    display: contents;
  }
  @media (max-width:1000px){
    
  .EResponsive{
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    height: fit-content;
    opacity: 1;

    .EResponsive Footer{
      position: relative;
      bottom: 0%;
    }
  }
    .Elaptop{
      opacity: 0;
      display: none;
    }
  }
`
const Events = () => {
  return (
    <EPage>
    <div className="EResponsive">
        <REvents/>
        <Footer/>
    </div>
    <div className='Elaptop'>
        <ScrollInfo/>
        <WorkPage/>
    </div>
    </EPage>
  )
}
export default Events