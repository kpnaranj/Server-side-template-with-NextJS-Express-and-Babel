import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <p>This is Layout</p>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
