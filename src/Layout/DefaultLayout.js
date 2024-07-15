import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './partiels/Footer';
import Header from './partiels/Header';

const DefaultLayout = () => {
  return (
    <div className='default-layout'>
      <div className='header'>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default DefaultLayout;
