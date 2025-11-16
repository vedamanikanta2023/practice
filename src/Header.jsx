import React from "react";
import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src="/logo.jpg"  // your logo in public folder
          alt="Company Logo"
          className="header-logo"
        />

        <h1 className="header-title">PAKSHULA</h1>
      </div>
    </header>
  );
}