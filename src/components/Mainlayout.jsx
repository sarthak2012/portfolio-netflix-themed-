// src/components/MainLayout.jsx
import React from "react";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main >{children}</main>{" "}
      {/* push down for fixed header */}
    </div>
  );
};

export default MainLayout;


