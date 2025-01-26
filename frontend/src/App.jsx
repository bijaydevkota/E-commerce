import React from "react";
import "./App.CSS";

import TopNavbar from "./components/top-navbar";
import MidNavbar from "./components/mid-navbar";
import BottomNavbar from "./components/bottom-navbar";
import HeroSectionSlider from "./components/hero-section-slider";

export default function App() {
  return (
    <div>     
      <TopNavbar/>
      <MidNavbar/>
      <BottomNavbar/>
      <hr className="text-gray-300 mt-4"/>
      <HeroSectionSlider/>
    </div>
  );
}