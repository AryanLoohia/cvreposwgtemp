import React, { useEffect } from "react";
import styled from "styled-components";
import "./styles/styles.scss";
import swgLogo from "../../../assets/swgHero.png"



const HeroSec=styled.section`
  position: relative;
  max-height: 92vh;
  top: 0%;
  overflow: hidden;
  pointer-events: none;

`
const Grad=styled.div`
  position: absolute;
  bottom: 0px;
  height: 50px;
  width: 100vw;
  background: linear-gradient(to bottom, rgba(255,255,255,0),rgba(255,255,255,1));
`
// const Heading=styled.div`
//   position: relative;
//   align-items: center;
//   justify-content: center;
//   text-align: center;

// `

const HeroNew = () => {
  useEffect(() => {
    const grids = document.querySelectorAll(".grid");
    const headings = document.querySelectorAll(".heading .wrapper .text");

    function enterScreen(index) {
      const grid = grids[index];
      const heading = headings[index];
      const gridColumns = grid.querySelectorAll(".column");

      grid.classList.add("active");

      gridColumns.forEach((element) => {
        element.classList.remove("animate-before", "animate-after");
      });

      heading.classList.remove("animate-before", "animate-after");
    }

    function exitScreen(index, exitDelay) {
      const grid = grids[index];
      const heading = headings[index];
      const gridColumns = grid.querySelectorAll(".column");

      gridColumns.forEach((element) => {
        element.classList.add("animate-after");
      });

      heading.classList.add("animate-after");

      setTimeout(() => {
        grid.classList.remove("active");
      }, exitDelay);
    }

    function setupAnimationCycle({ timePerScreen, exitDelay }) {
      //Delay time plus end animation time for all columns
      const cycleTime = timePerScreen + exitDelay;

      let nextIndex = 0;

      function nextCicle() {
        const currentIndex = nextIndex;

        enterScreen(currentIndex);

        setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen);

        nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1;
      }

      nextCicle();

      setInterval(nextCicle, cycleTime);
    }

    setupAnimationCycle({
      timePerScreen: 4000,
      exitDelay: 200 * 7,
    });
  });

  return (
    <HeroSec>
      {" "}
      {/* <Heading> */}
      <div className="heading">
        <img src={swgLogo} alt="logo"/>
        <span className="text">Right there with you in your</span>
        <div className="wrapper">
          <div className="offset1">
            <h2 className="text animate-before"><b>Academics</b></h2>{" "}
          </div>
          <div className="offset2">
            <h2 className="text animate-before"><b>CDC Preparation</b></h2>{" "}
          </div>
          <div className="offset3">
            <h2 className="text animate-before"><b>College Journey</b></h2>{" "}
          </div>
        </div>
      </div>
      {/* </Heading> */}
      <div className="grid-container">
        <div className="grid">
          <div className="column animate-before">
            <div className="item11"></div>
            <div className="item12"></div>
            {/* <div className="item1"></div> */}
          </div>
          <div className="column animate-before">
            <div className="item13"></div>
            <div className="item14"></div>
            {/* <div className="item1"></div>
            <div className="item1"></div>
            <div className="item1"></div> */}
          </div>
          <div className="column animate-before">
            <div className="item15"></div>
            <div className="item15"></div>
            {/* <div className="item1"></div>
            <div className="item1"></div>
            <div className="item1"></div> */}
          </div>
          <div className="column animate-before">
            <div className="item16"></div>
            <div className="item16"></div>
            {/* <div className="item1"></div>
            <div className="item1"></div>
            <div className="item1"></div> */}
          </div>
          <div className="column animate-before">
            <div className="item14"></div>
            <div className="item14"></div>
            {/* <div className="item1"></div>
            <div className="item1"></div>
            <div className="item1"></div> */}
          </div>


          <div className="column animate-before">
            <div className="item18"></div>
            <div className="item19"></div>
            {/* <div className="item1"></div>
            <div className="item1"></div>
            <div className="item1"></div> */}
          </div>
          <div className="column animate-before">
            <div className="item110"></div>
            <div className="item111"></div>
            {/* <div className="item1"></div>
            <div className="item1"></div>
            <div className="item1"></div> */}
          </div>
        </div>
        <div className="grid">
          <div className="column animate-before">
            <div className="item21"></div>
            <div className="item22"></div>
            {/* <div className="item2"></div>
            <div className="item2"></div>
            <div className="item2"></div> */}
          </div>
          <div className="column animate-before">
            <div className="item23"></div>
            <div className="item24"></div>
            {/* <div className="item2"></div>
            <div className="item2"></div>
            <div className="item2"></div> */}
          </div>
          <div className="column animate-before">
            <div className="item25"></div>
            <div className="item25"></div>
            {/* <div className="item2"></div>
            <div className="item2"></div>
            <div className="item2"></div> */}
          </div>
          <div className="column animate-before">
            <div className="item26"></div>
            <div className="item26"></div>
            {/* <div className="item2"></div>
            <div className="item2"></div>
            <div className="item2"></div> */}
          </div>
          <div className="column animate-before">
            <div className="item27"></div>
            <div className="item27"></div>
            {/* <div className="item2"></div>
            <div className="item2"></div>
            <div className="item2"></div> */}
          </div>
          <div className="column animate-before">
            <div className="item28"></div>
            <div className="item29"></div>
            {/* <div className="item2"></div>
            <div className="item2"></div>
            <div className="item2"></div> */}
          </div>
          <div className="column animate-before">
            <div className="item210"></div>
            <div className="item211"></div>
            {/* <div className="item2"></div>
            <div className="item2"></div>
            <div className="item2"></div> */}
          </div>
        </div>
        <div className="grid">
          <div className="column animate-before">
            <div className="item31"></div>
            <div className="item32"></div>
            {/* <div className="item3"></div>
            <div className="item3"></div>
            <div className="item3"></div> */}
          </div>
          <div className="column animate-before">
            <div className="item33"></div>
            <div className="item34"></div>
            {/* <div className="item3"></div>
            <div className="item3"></div>
            <div className="item3"></div> */}
          </div>
          <div className="column animate-before">
            <div className="item35"></div>
            <div className="item35"></div>
            {/* <div className="item3"></div>
            <div className="item3"></div>
            <div className="item3"></div> */}
          </div>
          <div className="column animate-before">
            <div className="item36"></div>
            <div className="item36"></div>
            {/* <div className="item3"></div>
            <div className="item3"></div>
            <div className="item3"></div> */}
          </div>
          <div className="column animate-before">
            <div className="item37"></div>
            <div className="item37"></div>
            {/* <div className="item3"></div>
            <div className="item3"></div>
            <div className="item3"></div> */}
          </div>
          <div className="column animate-before">
            <div className="item38"></div>
            <div className="item39"></div>
            {/* <div className="item3"></div>
            <div className="item3"></div>
            <div className="item3"></div> */}
          </div>
          <div className="column animate-before">
            <div className="item310"></div>
            <div className="item311"></div>
            {/* <div className="item3"></div>
            <div className="item3"></div>
            <div className="item3"></div> */}
          </div>
        </div>
      </div>
      <Grad></Grad>
    </HeroSec>
  );
};

export default HeroNew;
