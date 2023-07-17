import { useState, useEffect } from 'react';
import { Menu } from './Menu';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import { Modal } from './Modal';
import { Modales } from './Modales';








export const TicketsConsulta = ({hijoaPadre, hijoaPadreUpdate}) => {

 



  const [tickets, setTickets] = useState([]);
 

  const getTickets = async () => {

     try {
      const res = await axios.get("http://localhost:3300/ticket")
      setTickets(res.data[0]);
     // setLoading(true);
      console.log(res.data[0])
     } catch (err) {
      alert(err.message);
      
     }
    
    }


    
   

    const onDeleted = async(id) => {

      try {
        await axios.delete(`http://localhost:3300/ticket/${id}`)
        getTickets();
       } catch (err) {
        alert(err.message);
        
       }


    }


   
   
   

   

    

    useEffect(() => {

      getTickets();
     }, []);
  
  

  return (
    <>
   
    <div>
  
    <div className='col-auto bg-secondary p-4 text-center text-white'><h2 >Consulta de Tickets
      </h2></div>
    
    </div>
   <br></br><br></br>
  
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">SUCURSAL</th>
      <th scope="col">FECHA</th>
      <th scope="col">CATEGORIA</th>
      <th scope="col">SOPORTE</th>
      <th scope="col">SISTEMA</th>
      <th scope="col">DESCRIPCION</th>
    </tr>
  </thead>
  <tbody>
  <th scope="row"></th>
  {tickets.map((ticket) => (
        <tr key={ticket.ID}> 
        <td>{ticket.ID}</td>
        <td>{ticket.NAME_BRANCH}</td>
        <td>{ticket.FECHA}</td>
        <td>{ticket.CATEGORIA}</td>
        <td>{ticket.TIPO_SOPORTE}</td>
        <td>{ticket.SISTEMA}</td>
        <td>{ticket.DESCRIPCION}</td>
        <td>
        <button className='btn btn-warning' name='butonucdate' onClick={() => hijoaPadreUpdate(ticket.ID)}>Actualizar</button>
        
          </td>
          <td>
        
        
          </td>
        <td><button className='btn btn-danger'onClick={() => onDeleted(ticket.ID)}>Eliminar</button></td>
        <td><button className='btn btn-danger'onClick={() => hijoaPadre(ticket.ID)}>Visualizar
        
          </button></td>
        <td></td>
        

         
          
        
         </tr> 



        ))}


      
  
    

  </tbody>
</table>

 


   </>

  )
}
