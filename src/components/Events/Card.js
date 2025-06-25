import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled(motion.li)`
width: 44vw;
height: fit-content;
background-color: #00293A;
color: #fff;
padding: 0rem 0rem;
margin-right: 8rem;
display: flex;
flex-direction: column;
justify-content: space-between;
transition: all 0.2s ease;
overflow:hidden;
flex: 1;
/* min-width: 17rem ; */
max-width: 39.85rem;

& a{
    text-decoration: inherit;
    color: #fff;
}
&:hover{
    border-radius: 25px;
    box-shadow: 0 0px 10px 0 #028D93;
}
img{
    position: relative;
    top: 0rem;
    object-fit: cover;
    overflow: hidden;
}
@media screen and (max-width:1000px){
    img{
        height: 20vh;
        margin-right: 0;
        /* width: 100%; */
        /* top: 0%;
        left: 0; */
    }
    Box{
        height: fit-content;
        padding-right: 0;
        margin-right: 0;
        width: 82vw;
        /* min-width: 80vw; */
    }
}
`
const Title = styled.h2`
position: relative;
padding: 2% 4% 2% 4%;
font-size: calc(1em + 0.5vw);
`
const Description = styled.h2`
position: relative;
padding: 3% 4% 3% 4%;
font-size: calc(0.6em + 0.3vw);
font-family: 'Lato',sans-serif;
font-weight: 300;
word-wrap: normal;
overflow: hidden;
flex: 1;
`
const Tags = styled.div`
border-top: 2px solid #F44E77;
padding-top: 0.5rem;
display:flex;
flex-wrap:wrap;
${Box}:hover &{
border-top: 2px solid blueviolet;
}
`
const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);
`
const Footer = styled.footer`
display: flex;
justify-content: space-between;
position: relative;
top: 0.5rem;
flex: 1;
margin-bottom: 0.5rem;
margin-right: 2rem;
`
const Link = styled(NavLink)`
background-color: blueviolet;
color: #F44E77;
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 25px;
font-size:calc(1em + 0.5vw);

${Box}:hover &{
    background-color: #F44E77;
    color: #00293A;

}
`
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

    const {id, name, description, cover, link, demo, github} = props.data;

    return (
        <Box key={id} variants={Item}>
            <a href={link} target="_blank">
            <img src={cover} alt="Event Image"/>
            <Description>
                {description}
            </Description>
        </a>
        </Box>
    )
}

export default Card
