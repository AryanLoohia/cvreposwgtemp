
import { motion } from "framer-motion";
import React from "react";
import { Analytics } from "@vercel/analytics/react"
import {Route, Switch, Routes, useLocation} from "react-router";
import Navbar from "components/NavBar/Navbar";
import Events from "components/Events/Events";
import About from "components/About/About";
import Home from "components/Home/Home";
import Blogs from "components/BlogPage/Blogs";
import Blog from 'components/BlogPage/Blog';
import Internblogs from "components/BlogPage/BHome/internblogs";
import Placementblogs from "components/BlogPage/BHome/placementblogs";
import Adieublogs from "components/BlogPage/BHome/adieublogs";
import Resources from "components/Resources/Resources";
import KYDblogs from "components/BlogPage/BHome/kydblogs";
import Study2 from "components/BlogPage/BHome/study2";
import TeamPage from "components/About/TeamPage";
import Repo from "components/cvrepo/cvrepo";


function App() {

  const location = useLocation();
  
  return <>

    <Navbar/>
     <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/blog" element={<Blogs/>}/>
      <Route path="/blog/:id" element={<Blog/>}/>
      <Route path="/resources" element={<Resources/>}/>
      <Route path="/2nd_year_material" element={<Study2/>}/>
      <Route path="/internblogs" element={<Internblogs />}/>
      <Route path="/placementblogs" element={<Placementblogs />}/>
      <Route path="/kyd" element={<KYDblogs/>}/>
      <Route path="/adieublogs" element={<Adieublogs/>}/>
      <Route path="/about/team" element={<TeamPage/>}/>
      <Route path="/cvrepo" element={<Repo/>}/>
      {/* <Route path="/blogs" element={<Home/>}/> */}
    </Routes> 
    {/* <Footer/> */}
  </>
}

export default App;