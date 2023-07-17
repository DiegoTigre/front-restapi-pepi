

import React, { useEffect, useState } from 'react';
import {Modal} from './Modal';
import {TicketsConsulta} from './TicketsConsulta';
import axios from 'axios';
import { Menu } from './Menu';
import { NavLink } from 'react-router-dom';



export const Modales = () => {

  

  const [data, setDatos] = useState('');
  


  const hijoaPadre = (datoshijo) => {
      setDatos(datoshijo);
   
     // console.log(data);
      console.log(data + 'visualizar');
      
    
  }

  





 



  //prueba
  useEffect(() => {
    getTicketsDet();

}, [data]);

  const [ticketsdet, setTicketsDet] = useState([]);


    const getTicketsDet = async () => {

        try {
         const res = await axios.get(`http://localhost:3300/ticket/${data} `)
         setTicketsDet(res.data[0]);
      //   setLoading(true);
         console.log(ticketsdet)
        } catch (err) {
         alert(err.message);
         
        }
       
       }

  return (
    <>
<Menu/>

<div class="container-fluid">
  <div class="row text-white text-center">
  <div class="col-9 bg-white border">
 
    <TicketsConsulta hijoaPadre={hijoaPadre} ></TicketsConsulta> 

    
   

    </div>
    <div class="col-3 bg-white border">

    <div>
  
  <div className='col-auto bg-secondary p-4 text-center text-white'><h2 >Seguimiento
    </h2></div>
  
  </div>
    
    <div className='w-100'> </div>

   
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Fecha</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Atendio</th>
  
    </tr>
  </thead>
  <tbody>
  <th scope="row"></th>
  {ticketsdet.map((ticket) => (
        <tr key={ticket.ID}> 
        <td>{ticket.ID_TICKET}</td>
        <td>{ticket.DATE_UPDATE_TICKETDET }</td>
        <td>{ticket.DESCRIPTION_TICKETDET}</td>
        <td>{ticket.NAME_USER}</td>
       
        
        

      
          
        
         </tr> 
        ))}


      
  
    

  </tbody>
</table>
    
    </div>
    
  </div>
  
</div>




 
    



    

    
    
    
    </>
    
  )
}
