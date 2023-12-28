import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
        <Outlet/>
        <p>Layout Page</p>
    </>
  );
}

export default Layout;
