import React from "react";
import TopBar from './TopBar';
import HeaderInner from './HeaderInner';
const Header = () => {
  return (
    <div>
      <header className="header">
        <TopBar />
        <HeaderInner />
      </header>
    </div>
  );
};
export default Header;
