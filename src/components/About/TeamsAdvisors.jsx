import React from "react";
import "./TeamsStyles.css";
import { AdvisorsList } from "./Data/Headsdata";
const Teams = () => {
  return (
    <div className="responsive-container-block TScontainer" id="team">
      <div className="responsive-container-block">
        {AdvisorsList.map((advisor)=>(
        <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container" key={advisor.id}>
            <div className="card">
                <div className="team-image-wrapper">
                    <img src={advisor.pfp} className="team-member-image"/>
                </div>
                <p className="text-blk name">{advisor.name}</p>
                <div className="social-icons">

              <a href={advisor.fb} className="facebook"><i className="fa fa-facebook"></i></a>
              <a href={advisor.linkedin} className="linkedin"><i className="fa fa-linkedin"></i></a>

            </div>
            </div>
            
        </div>
        )
        )}
      </div>
      <br/>
      
    </div>
  );
};

export default Teams;
