import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Time from './components/Time';

import { MainPage } from './pages/MainPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { NotFound } from './pages/NotFound';
import { store } from './store/index'
import Products from './pages/products/Products';

function App() {

  const products = [
    {
      id: 1,
      name: '2121'
    },
    {
      id: 2,
      name: '2121'
    },
    {
      id: 3,
      name: '2121'
    }
  ]
  
  return (
    <div>
      <Helmet>
        <link rel="apple-touch-icon" sizes="144x144" href="./favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicons/favicon-16x16.png" />
        <link rel="manifest" href="./favicons/site.webmanifest" />
      </Helmet>

      <Header />
      {/* <Provider store = {store}> */}
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />


          

          <Route path='/products'element = {<Products products={products}/>}></Route>
          {/* <Route path='/products/black-capture' element={<BlackCapture />} />
          <Route path='/products/cyber-radmir' element={<CyberRadmir />} />
          <Route path='/products/sborka-na-zakaz' element={<SborkaNaZakaz />} /> */}

          <Route path='*' element={<NotFound />} />
        </Routes>
      {/* </Provider> */}
      <Time/>
    </div>
  );
}

export default App;
