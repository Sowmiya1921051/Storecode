import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header/header.jsx'
import Home from './nav/Home.jsx'
import Login from './nav/Login.jsx'
import Register from './nav/Register.jsx'
import Contact from './nav/Contact.jsx'
import About from './nav/About.jsx'
import Followers from './followers/Followers.jsx';
import Program from './program/Program.jsx';
import Guide from './guide/Guide.jsx';
import Footer from './footer/Footer.jsx';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Followers/>
      <Program/>
      <Guide/>
      <Footer/>
    </div>
  );
}

export default App;
