


import React from 'react';
import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <>
   { /*  menu start */}
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>

      { /* Nav container start */}
      <div className='container-fluid'>
        <a href='' className='navbar-brand text-info fw-semibold fs-4'>CONCRETO Y BLOCK PEPI</a>

        {/*  NavButton   */}
        <button className='navbar-toggler' type='button'
        data-bs-toggle="offcanvas"
        data-bs-target="#menuLateral"
        >
          <span className='navbar-toggler-icon'></span>

        </button>
         {/* offcanvas main container start  */}  
         <section 
         className='offcanvas offcanvas-start bg-dark'
         id="menuLateral"
         tabIndex={-1}
         
         >
          <div 
          className='offcanvas-header'
          data-bs-theme="dark"
          >
            <h5 className='offcanvas-title text-info'>CONCRETOS PEPI</h5>
            <button 
            className='btn-close' 
            type='button'
            aria-label='Close' 
            data-bs-dismiss="offcanvas"></button>
          </div>
          <div className='offcanvas-body d-flex flex-column
          justify-content-between px-0'>
            <ul className='navbar-nav fs-5 justify-content-evenly'>
              <li className='nav-item p-3 py-md-1'><NavLink to="/home" className="nav-link">HOME</NavLink></li>
              <li className='nav-item p-3 py-md-1'><NavLink to="/ticket" className="nav-link">TICKET</NavLink></li>
              <li className='nav-item p-3 py-md-1'><NavLink to="/consulta" className="nav-link">CONSULTA</NavLink></li>
              <li className='nav-item p-3 py-md-1'><NavLink to="/about" className="nav-link">ABOUT</NavLink></li>
              <li className='nav-item p-3 py-md-1'><NavLink to="/contacto" className="nav-link">CONTACT</NavLink></li>
              <li className='nav-item p-3 py-md-1'><NavLink to="/" className="nav-link">LOG OUT</NavLink></li>

            </ul>

           {/* Enlaces Redes Sociales  */}  
           <div className='d-lg-none align-self-center py-3'>
            <a href=''><i className='bi bi-twitter px-2 text-info fs-2' ></i></a>
            <a href='https://www.facebook.com/people/Concretos-Pepi-Saltillo/100020718017902/'><i className='bi bi-facebook px-2 text-info fs-2'></i></a>
            <a href=''><i className='bi bi-github px-2 text-info fs-2'></i></a>
            <a href=''><i className='bi bi-whatsapp px-2 text-info fs-2'></i></a>
           </div>

          </div>
         </section>
         {/* offcanvas main container end  */} 

      </div>

    </nav>

    </>
  )
}
