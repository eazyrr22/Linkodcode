import React from "react";
import Slogen from "./components/application-layout/Slogen";
import type { Post } from "./itemType";
import { Routes,Route } from 'react-router'
import HomePage from "./pages/HomePage";
import Posts from "./pages/Posts";


export default function App() {
  return (
    <>
     <Routes>
        <Route path='/Home' element={<HomePage/>}></Route>
        <Route path='/posts' element={<Posts/>}></Route>
      </Routes>
      
      
    </>
  );
}
