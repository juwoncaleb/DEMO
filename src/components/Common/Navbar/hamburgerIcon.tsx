import React, { useState } from "react";

export default function HamburgerIcon({
  lineColor = "#FFFFFF",
  onToggle,

  isNavOpen,
}: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    onToggle();
  };

  return (
    <div
      className={`menu-toggle ${isOpen ? "menu-open" : ""}`}
      onClick={toggleMenu}
    >
      <div className="line" style={{ backgroundColor: lineColor }} />
      <div className="line" style={{ backgroundColor: lineColor }} />
    </div>
  );
}
