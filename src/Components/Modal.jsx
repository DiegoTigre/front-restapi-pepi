import React, { useEffect,useState } from 'react';
import  '../Estilos/Modal.css';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { TicketsConsulta } from './TicketsConsulta';
import Swal from 'sweetalert2';





export const Modal = ({pasar, closemodal}) => {


  





        
       
         const initialstate = ({
           ticket: pasar,
           description: "",
           date: new Date(),
           user: "3"
          
          
       
          
            
       
         });




         
           const [values, setValues] = React.useState(initialstate);
           
           const onSubmit = (e) => {
               e.preventDefault();
                 axios.post("http://localhost:3300/ticketdet",{
            ID_TICKET: values.ticket,        
           DESCRIPTION_TICKETDET: values.description,
           DATE_UPDATE_TICKETDET: values.date,
           ID_USER: values.user
           
                     
       
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

    

   
  
  



useEffect(() => {
  
  

}, []);




const mostrarAlerta = () => {
  
  Swal.fire('Ticket','Guardado','success')
  .then(() => {
    // Aquí la alerta se ha cerrado
    
    console.log("Alerta cerrada");
    
});
  
 }

  return (
    <>


 
    <div className='modal-container'>
        <div className='modal-body'>
             
           
         
          <div className='text-center'>
          

            ----
             <div className='col-auto bg-secondary p-4 text-center text-white'><h2>Alta de seguimiento a ticket {pasar}</h2></div>

<br></br>

<section className="content">
    <div className="row">
       
       {/* columna derecha */}
        <div className="col-sm-6 offset-sm-3">
            <div className="box box-warning">
                <div className="box-header with-border">
                    <h3 className="box-title"> Registro de seguimiento</h3>
                </div>

                <br></br>

                 {/* Aqui empieza la informacion del solcitante */}
                <form id="informacionSolicitante" className="user">
                    <div className="box-body">

                      <div className="form-group">
                      <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"
                      
                       name="Date"
    
                       value={values.date}
                       onChange={handleChange}
    
                       />
                      </div>

<br></br>

                       


                        

                      
                        
                        <div className="form-group">
                        <textarea className="form-control" id="textAreaExample3" 
                        rows="10" cols="100"
    
    name="description"
    type="text"
    value={values.description}
    onChange={handleChange}
  />
                        </div>
                        <div className="form-group">
                          
                        </div>



                        <br></br>
                        <div className="box-footer">
                            <button className="btn btn-primary btn-user btn-block" onClick={onSubmit}>Guardar</button>
                            
                            
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            
                            <button className="btn btn-google btn-user btn-block" name='close' onClick={closemodal()}>
                            Regresar
                            </button>

                            
                            
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

    ///
          </div>
        </div>
    </div>

    </>
  )
}
