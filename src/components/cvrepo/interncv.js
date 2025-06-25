import React, { useState } from "react";
import EmptyList from "components/BlogPage/Common/EmptyList";
import { internCVList } from "./data_interncv";
import CVlayout from "./CVlayout";

const Interncv = (props) => {
    const { blogs } = props;

    return ( 
        <div>
            
            {!blogs.length ? <EmptyList/> :<CVlayout blogs={blogs} />}
    </div>
     );
}
 
export default Interncv;