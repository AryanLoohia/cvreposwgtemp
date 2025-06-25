import React, { useEffect, useState } from 'react';
import Navbar from 'components/NavBar/Navbar';
import Cvheader from 'components/cvrepo/Cvheader';
import CardList from './CardList';
import './repo.css';

const Repo = () => {
    
    return ( 
        <div>
            <Navbar />
            <Cvheader />
            <div className="home">
                    
                    <CardList/>
            </div>
        </div>
     );
}
 
export default Repo;