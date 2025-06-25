import React from 'react'
import './NavbarStyles.css';
import { motion } from "framer-motion";
import { Component } from 'react';
import Logo from 'components/Logo';

class Navbar extends Component {
  state={clicked:false};
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render(){
  return (
    <nav>
      <a href='/cvrepo'>
        <Logo/>
      </a>
      <div>
        <ul id="navbar" className={this.state.clicked? "#navbar active": "#navbar"}>
          <a href='/cvrepo' className="links">
          <motion.li
        whileHover={{scale:1.1, y:-2}}
        whileTap={{scale:0.9,y:0}}>
            CV&nbsp;Repo
          </motion.li>
          </a>
        </ul>
      </div>
      <div id='mobile' onClick={this.handleClick}>
        <i id='bar' className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
      </div>
    </nav>
  )
}
}

export default Navbar