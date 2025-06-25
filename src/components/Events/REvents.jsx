import React from "react";
import styled from "styled-components";

import { Work } from './WorkData';
import {motion} from 'framer-motion';
import RCard from "./RCard";
import ScrollToTop from "components/ScrollToTop";

const REventP = styled.section`
  min-height: 100vh;
  position: relative;
  top: 8vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;

  .REtitle{
    width:100vw;
    align-items:center;
    margin-top: 2rem;
    justify-content: center;
    font-weight: 400;
    color: #00293A;
  }
  .REtitle h2{

    text-align: center;
    font-size: 2rem;
  }
`;
const Box = styled.div`
background-color: #fff;

height:fit-content;
position: relative;
display: flex;
flex-direction: column;
align-items: center;


`
const Main = styled(motion.ul)`
position: fixed;
top: 22vh;
transform: translateY(-50%);
left:calc(10rem + 15vw);
height: 40vh;
display: flex;

color:white;
`



const REvents = () => {
  return (<>

    <REventP>
      <div className="REtitle"><h2>Events</h2></div>
      <Box>
        {/* <ParticlesBG/> */}
        {/* <Main> */}
          {Work.map((d) => (
            <RCard key={d.id} data={d} />
          ))}
        {/* </Main> */}
      </Box>
      <ScrollToTop/>
    </REventP>
    </>
  );
};

export default REvents;
