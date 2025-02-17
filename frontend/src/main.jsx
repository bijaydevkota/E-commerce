import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";

import Dashboard from "./pages/dashboard.jsx";
import SingleCategory from "./pages/single-category.jsx";
import Docs from "./pages/docs.jsx";
import TopNavbar from "./components/top-navbar.jsx";
import MiddleNavbar from "./components/mid-navbar.jsx";
import BottomNavbar from "./components/bottom-navbar.jsx";
import Footer from "./components/footer.jsx";
import Shop from "./pages/shop.jsx";
import Stores from "./pages/stores.jsx";
import Blogs from "./pages/blogs.jsx";
import MegaMenu from "./pages/mega-menu.jsx";
import ProductDescription from "./pages/product-description.jsx";
import SignIn from "./pages/sign-in.jsx";
import SignUp from "./pages/sign-up.jsx";

export function Root() {
  const location = useLocation();

  return (
    <StrictMode>
      {location.pathname !== "/blogs" && location.pathname !== "/sign-in" && (
        <div className=" space-y-4">
          <TopNavbar />
          <MiddleNavbar />
          <BottomNavbar />
          <hr className="  text-gray-200" />
        </div>
      )}

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories/:id" element={<SingleCategory />} />

        <Route path="/shop" element={<Shop />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/mega-menu" element={<MegaMenu />} />
        <Route path="/shop/:id" element={<ProductDescription />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {location.pathname !== "/blogs" && location.pathname !== "/sign-in" && (
        <Footer />
      )}
    </StrictMode>
  );
}
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
