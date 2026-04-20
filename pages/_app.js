// pages/_app.js
import React from 'react';
import '../styles/globals.css';
import SmoothScroll from '../components/SmoothScroll';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SmoothScroll />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
