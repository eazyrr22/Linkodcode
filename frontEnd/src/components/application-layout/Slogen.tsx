import React from "react";
import Logo from "./Logo";
import "C:/Users/עזריאל/source/repos/Linkodcode web/frontEnd/src/css/logo.css";
import "C:/Users/עזריאל/source/repos/Linkodcode web/frontEnd/src/css/slogen.css";
import Navbar from "./navbar";

export default function Slogen() {
  return (
    <div id="slogen-layout">
      <div id="slogen-top">
        <Logo />
        <h1 id="web-title">Linkodcode</h1>
      </div>
      <Navbar/>
    </div>
  );
}
