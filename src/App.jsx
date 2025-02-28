import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from "react-redux";
import { Container } from '@mui/material';
import Navbar from './Components/Navbar/Index';
import LoginComponent from './Components/Login/Index';
import store from './redux/store'
import Intro from './Components/Inro/introcontainer'
import ProductShowcase from './Components/productslist/ProductShowcase';


const App = () => {

  return (
    < Provider store={store}>

      <Navbar />

      <Container>

        {/* <LoginComponent /> */}

        <Intro />

        <ProductShowcase />

      </Container>


    </Provider>
  );
};

export default App;
