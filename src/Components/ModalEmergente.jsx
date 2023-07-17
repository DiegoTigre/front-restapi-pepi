import React, { useEffect, useState } from 'react'
import { Modales } from './Modales'
import { Modal } from './Modal';
import { TicketsConsulta } from './TicketsConsulta';
import { Menu } from './Menu';
import axios from 'axios';




export const ModalEmergente = () => {






 


  const [data3, setDatos3] = useState('');
  const [data4, setDatos4] = useState('0');
 
  const hijoaPadreUpdate = (datoshijo) => {
   
    setDatos3(datoshijo);
   // console.log(data);
    console.log(data3);
    showmodal();
  
}

const padreahijo = () => {
  setDatos4(data3)
}





const [data, setDatos] = useState('');
  


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


const hijoaPadre = (datoshijo) => {
    setDatos(datoshijo);
 
   // console.log(data);
   getTicketsDet()
  
    console.log(data + 'visualizar');

}



useEffect(() => {
  //hijoaPadreUpdate();
 // padreahijo();
//getTicketsDet();

}, []);



const [dataset, setdataset] = useState(data3);
const showmodal = () => {
setdataset(1);
}

const closemodal = () => {
  setdataset(1);
  }



///





   


  
//<Modal />
  return (
    <>
   
    
     
  {dataset != 0 && <Modal  pasar={data3} closemodal={closemodal}/>}
    
  
     
        
    <Menu/>    
  <div className="container-fluid">
  <div className="row text-white text-center">
        <div className="col-9 bg-white border">
       

   <TicketsConsulta hijoaPadreUpdate={hijoaPadreUpdate} hijoaPadre={hijoaPadre} ></TicketsConsulta>  

        </div>
    <div className="col-3 bg-white border">

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


//  <Modal  pasar={data4}/>   {data3 != 0 && <Modal  pasar={data3}/>}