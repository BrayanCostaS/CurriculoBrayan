import React from 'react';
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Header from "./Header";

const Layout = () => {
  return (
    <div id="portifolio">
      <Header />
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Layout;