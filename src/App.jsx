import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { TicketsAlta } from './Components/TicketsAlta';
import { About } from './Components/About';
import { TicketsConsulta } from './Components/TicketsConsulta';
import { Contact } from './Components/Contact';
import { Modales } from './Components/Modales';
import { Modal } from './Components/Modal';
import { ModalEmergente } from './Components/ModalEmergente';
export const App = () => {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/ticket" element={ <TicketsAlta /> } />
        <Route path="/consultass" element={ <Modales /> } />
        <Route path="/modales" element={ <Modales /> } />
        <Route path="/modal" element={ <Modal /> } />
        <Route path="/consulta" element={ <ModalEmergente /> } />
        
        <Route path="/contacto" element={ <Contact /> } />
      </Routes>
    </div>
    
  )

  
}

