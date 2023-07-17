

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Menu } from './Menu';
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2';


export const TicketsAlta = () => {

  useEffect(()=>{
   
  
  }, []);

  const mostrarAlerta = () => {
   Swal.fire('Ticket','Guardado','success')
  
  }

  const initialstate = ({
    date: new Date(),
    category: "",
    support: "",
    branch: "",
    system: "",
    descripcion: "",
    creado: new Date()
   

   
	

  });
  
    const [values, setValues] = React.useState(initialstate);
    
    const onSubmit = (e) => {
        e.preventDefault();
          axios.post("http://localhost:3300/ticket",{
     DATE: values.date,        
    CATEGORY: values.category,
    SUPPORT: values.support,
    BRANCH: values.branch,
    SYSTEM: values.system,
    DESCRIPTION: values.descripcion,
    created_at: values.date

   
              

          }).then((result) => {
      //      console.log(result);
            mostrarAlerta();
           
          });
       
        
      }

      

        
    
    
      function handleChange(evt) {
        /*
          evt.target es el elemento que ejecuto el evento
          name identifica el input y value describe el valor actual
        */
        const { target } = evt;
        const { name, value } = target;
    
        /*
          Este snippet:
          1. Clona el estado actual
          2. Reemplaza solo el valor del
             input que ejecutó el evento
        */
        const newValues = {
          ...values,
          [name]: value,
        };
    
        // Sincroniza el estado de nuevo
        setValues(newValues);
        console.log(values);
      }
  
    return (

    <>

    <Menu />

    <div className='col-auto bg-secondary p-4 text-center text-white'><h2>Registro de Ticket</h2></div>

    <br></br>

    <section class="content">
        <div class="row">
           
           {/* columna derecha */}
            <div class="col-sm-6 offset-sm-3">
                <div class="box box-warning">
                    <div class="box-header with-border">
                        <h3 class="box-title">Ticket de seguimiento</h3>
                    </div>

                    <br></br>

                     {/* Aqui empieza la informacion del solcitante */}
                    <form id="informacionSolicitante" class="user">
                        <div class="box-body">

                          <div class="form-group">
                          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                          
                           name="Date"
        
                           value={values.date}
                           onChange={handleChange}
        
                           />
                          </div>

<br></br>

                            <div class="form-group">
                            <select 
                            class="form-select form-select-lg mb-3" 
                            aria-label="Ejemplo de .form-select-lg"
                            name="category"
                            type="text"
                            value={values.category}
                            onChange={handleChange}>
                             <option selected >Categoria de atención</option>    
                             <option value="1">Desarrollo</option>
                             <option value="2">Soporte</option>
                            </select>

                            </div>


                            <div class="form-group">
                            <select 
                            class="form-select form-select-lg mb-3" 
                            aria-label="Ejemplo de .form-select-lg"
                            name="support"
                            type="text"
                            value={values.support}
                            onChange={handleChange}>
                               <option selected >Tipo de soporte</option>    
                             <option value="5">Programacion</option>
                             <option value="2">Impresoras</option>
                             <option value="3">Telefonia</option>
                             <option value="4">Internet</option>
                             <option value="1">Equipo de computo</option>
                            </select>
                            </div>

                            
                            <div class="form-group">
                                
                            <select 
                            class="form-select form-select-lg mb-3" 
                            aria-label="Ejemplo de .form-select-lg"
                            name="branch"
                            type="text"
                            value={values.branch}
                            onChange={handleChange}>
                               <option selected >Sucursal</option>    
                             <option value="1">Saltillo Concretos</option>
                             <option value="2">Irapuato Concretos</option>
                             <option value="3">Saltillo Block</option>
                             <option value="4">Irapuato Block</option>
                            </select>

                            </div>
                            <div class="form-group">
                                
                            <select 
                            class="form-select form-select-lg mb-3" 
                            aria-label="Ejemplo de .form-select-lg"
                            name="system"
                            type="text"
                            value={values.system}
                            onChange={handleChange}>
                               <option selected>Sistema</option>    
                            <option value="1">CSI </option>
                            <option value="2">Contpaqi</option>
                            </select>

                            </div>
                            <div class="form-group">
                            <textarea class="form-control" id="textAreaExample3" 
                            rows="10" cols="100"
        
        name="descripcion"
        type="text"
        value={values.descripcion}
        onChange={handleChange}
      />
                            </div>
                            <div class="form-group">
                              
                            </div>



                            <br></br>
                            <div class="box-footer">
                                <button class="btn btn-primary btn-user btn-block" onClick={onSubmit}>Enviar
                                <NavLink to="/home" className='nav-item p-3 py-md-1'></NavLink></button>
                                
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; 
                                <button class="btn btn-google btn-user btn-block" >
                                <NavLink to="/home" className='nav-item p-3 py-md-1'>Regresar</NavLink>
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}




