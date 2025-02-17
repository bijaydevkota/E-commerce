import React from "react";
import "./App.CSS";

import TopNavbar from "./components/top-navbar";
import MidNavbar from "./components/mid-navbar";
import BottomNavbar from "./components/bottom-navbar";
import HeroSectionSlider from "./components/hero-section-slider";
import FeatureCategoriesSection from "./components/feature-categories-section";
import BannerSection from "./components/banner-section";
import PopularProductsSection from "./components/popular-products";

export default function App() {
  return (
    <div>     
      
      <HeroSectionSlider/>
      <FeatureCategoriesSection/>
      <BannerSection/>
      <PopularProductsSection/>
    </div>
  );
}