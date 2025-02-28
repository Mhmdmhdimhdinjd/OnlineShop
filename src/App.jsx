import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from "react-redux";
import { Container } from '@mui/material';
import Navbar from './Components/Navbar/Index';
import LoginComponent from './Components/Login/Index';
import store from './redux/store'
import Intro from './Components/Inro/introcontainer'
import ProductShowcase from './Components/productslist/ProductShowcase';
import Slider from './Components/Slider/Slider'

import Home from './pages/Home/index'
import Products from './pages/Products/index';
import Notfound from './pages/Notfound/Notfound';

const App = () => {

  // return (
  //   < Provider store={store}>

  //     <Navbar />

  //     <Container>

  //       <Slider/>

  //       {/* <LoginComponent /> */}

  //       <Intro />

  //       {/* <ProductShowcase /> */}

  //       <Products/>

  //     </Container>


  //   </Provider>
  // );

  return (

    <Provider store={store}>

      <Router>

        <Routes>

          <Route path='/onlineshop-nini/' element={<Home />} />

          <Route path='/onlineshop-nini/Home' element={<Home />} />

          <Route path="/onlineshop-nini/Products" element={<Products />} />

          <Route path="/onlineshop-nini/*" element={<Notfound />} />

        </Routes>

      </Router>

    </Provider>

  )

};

export default App;
