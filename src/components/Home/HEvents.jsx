import ECarousel from 'components/Events/ECarousel'
import React from 'react'
import styled from 'styled-components'
import { Splide } from '@splidejs/react-splide'
import { useEffect } from 'react'
const HEvents = () => {
  useEffect(()=>{
    
function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 150;

if (elementTop < windowHeight - elementVisible) {
  reveals[i].classList.add("active");
}
}
}
window.addEventListener("scroll", reveal);
document.addEventListener( 'DOMContentLoaded', function () {
new Splide( '.splide' ).mount();
} );
  })
  return (
    <EventsSec className='reveal'>
        <ECarousel/>
    </EventsSec>
  )
}
const EventsSec=styled.section`
    position: relative;
    height: auto;
    width: 100vw;
`
export default HEvents