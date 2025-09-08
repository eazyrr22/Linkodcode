import React from "react";
import MainContent from "./components/application-layout/MainContent"
import Slogen from "./components/application-layout/Slogen";
import type { Post } from "./itemType";

export default function App() {
  return (
    <div>
      <Slogen/>
      <MainContent/>
      
      
    </div>
  );
}
