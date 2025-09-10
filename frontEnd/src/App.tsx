import React from "react";
import MainContent from "./components/application-layout/MainContent"
import Slogen from "./components/application-layout/Slogen";
import type { Post } from "./itemType";
import { Routes,Route } from 'react-router'


export default function App() {
  return (
    <>
     <Routes>
        {/* <Route path='/' element={<Home/>}></Route> */}
        {/* <Route path='/posts' element={<Posts/>}></Route> */}
      </Routes>
      <Slogen/>
      <MainContent/>
      
      
    </>
  );
}
