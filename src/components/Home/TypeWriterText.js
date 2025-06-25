import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import { NavLink } from 'react-router-dom';
import RippleButton from 'components/RippleButton/rippleButton';

const Title =styled.h2`
font-size: 2.3rem;
text-transform: capitalize;
width:80%;
color:#fff;
align-self: flex-start;

span{
    text-transform: uppercase;
    /* font-family: 'Akaya Telivigala', cursive; */
    font-size: 2rem;
    font-weight: 400;
}

.text-1{
    color:#4285F4;
}
.text-2{
    color:#DB4437;
}
.text-3{
    color:#F4B400;
}
.text-4{
    color:#0F9D58;
}
`
const SubTitle = styled.h3`
font-size: ${props=> props.theme.fontmd};
text-transform: capitalize;
color: #16194F;
font-weight: 600;
margin-bottom: 1rem;
width:80%;
align-self: flex-start;

/* &:hover{
    color: #F44E77;
} */
`

const Cabin = styled.div`
position: absolute;
top: 36vh;
left: 6vw;
padding: 4rem 0rem;
padding-left: 2rem;
background: rgba(0,0,0,0.06);
pointer-events: none;
backdrop-filter: blur(1rem);
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 20px 7px;
/* border: 3px solid #16194F; */
color: #16194F;
display:flex;
flex-direction: column;
justify-content: center;

/* &:hover
    /* border: 3px solid #fff; */
    /* background: #16194F; */
    /* color: #fff; */
`

const ButtonContainer = styled.div`
width: 80%;
`

const Btn = styled.button`
display: inline-block;
background-color: ${props=>props.theme.body};
color:${props=>props.theme.text};
outline: none;
border: none;

font-size: ${props=>props.theme.fontsm};
padding: 0.6rem 2.1rem;
border-radius: 50px;
cursor:pointer;
transition: all 0.2s ease;
position: relative;
&:hover{
    transform: scale(0.9);

}
&::after{
    content: ' ';
    position:absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props=>props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;

}
&:hover:after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}

`
const BtnText = styled(NavLink)`
text-decoration: none;
color: ${props => props.theme.text};


` 

const TypeWriterText = () => {
  return (
<Cabin>
<Title>
        Right There with you in your
<Typewriter
        options={{
            autoStart:true,
            loop:true,

        }
        }
  onInit={(typewriter) => {
    typewriter.typeString('<span class="text-1">Academics</span>')
    .pauseFor(200)
    .deleteAll()
    .typeString('<span class="text-2">Internship</span>')
    .pauseFor(200)
    .deleteAll()
    .typeString('<span class="text-3">Research</span>')
    .pauseFor(200)
    .deleteAll()
    .typeString('<span class="text-4">Placement</span>')
    .deleteAll()
    .start()
  }}
/>
</Title>
<SubTitle>
Anything You Need In Your College Journey.
</SubTitle>
<a href="#Intro"><ButtonContainer>
    <RippleButton>Explore</RippleButton></ButtonContainer>
</a>
</Cabin>
  );
};

export default TypeWriterText