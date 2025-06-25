import Footer from 'components/Footer/Footer'
import ScrollToTop from "components/ScrollToTop";
import React from "react";
import Teamtabs from "./Teamtabs";

const TeamPage = () => {
  return (
    <>
      <p className="text-blk team-head-text" id="team">
        Our Team
      </p>
      <Teamtabs />

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default TeamPage;
