import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="font-poppins bg-browny-50 text-browny-500">
      <Navbar />
      <div className="min-h-[100vh]">{children}</div>
      <Footer />
    </div>
  );
}
