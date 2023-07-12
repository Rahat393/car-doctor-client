import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import './Main.css'

const Main = () => {
  return (
    <div>
      <div className='wrapper'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      </div>
      <footer className="footerr">
      <Footer></Footer>
      </footer>
    </div>
  );
};

export default Main;