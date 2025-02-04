import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter,Routes, Route } from "react-router";
import Docs from "./pages/docs.jsx";
import Dashboard from "./pages/dashboard.jsx";
import SingleCategory from "./pages/single-category.jsx";
import TopNavbar from "./components/top-navbar.jsx";
import MidNavbar from "./components/mid-navbar.jsx";
import BottomNavbar from "./components/bottom-navbar.jsx";
import Footer from "./components/Footer.jsx";
import Shop from "./pages/shop.jsx";
import Stores from "./pages/stores.jsx";
import Blogs from "./pages/blogs.jsx";
import MegaMenu from "./pages/mega-menu.jsx";
import ProductDescription from "./pages/product-description.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>

    <TopNavbar/>
    <MidNavbar/>
    <BottomNavbar/>
    <hr className="text-gray-300 mt-4"/>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/categories/:id" element={<SingleCategory />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/mega-menu" element={<MegaMenu />} />
      <Route path="/product-description" element={<ProductDescription />} />
     
    </Routes>

    <Footer/>
    </BrowserRouter>
  </StrictMode>
);