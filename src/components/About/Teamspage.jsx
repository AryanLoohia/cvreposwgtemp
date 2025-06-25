import Footer from 'components/Footer/Footer'
import ScrollToTop from 'components/ScrollToTop'
import React from 'react'
import Teamtabs from './Teamtabs'

const Teamspage = () => {
  return (
    <div>
        <p className="text-blk team-head-text" id='team'>Our Team</p>
        <Teamtabs />
        <Footer/>
        <ScrollToTop/>
    </div>
  )
}

export default Teamspage