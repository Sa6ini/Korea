import React from "react";
import TopBar from './TopBar';
import HeaderInner from './HeaderInner';
const Header = () => {
  return (
    <div>
      <header className="header">
        {/* Topbar */}
        <TopBar />
        {/* End Topbar */}
        {/* Header Inner */}
        <HeaderInner />
        {/*/ End Header Inner */}
      </header>
    </div>
  );
};
export default Header;
