import React,{useState} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {EyeIcon } from '@heroicons/react/24/outline';


function Patients() {

    const [rowData] = useState([
        {Numero: 1, Nom: "Toyota", Prenom: "Celica", },
        {Numéro: 2, Nom: "Ford", Prenom: "Mondeo", },
        {Numéro: 3, Nom: "Porsche", Prenom: "Boxster", }
    ]);

    const CellBtn = ({num}) =>{
        return <button style={{backgroundColor:'white'}} onClick={() => console.log(num)}>
             <EyeIcon className="block h-6 w-6 hover:"/></button>
    }
    
    const [columnDefs] = useState([
        { field: 'Numero', resizeable:true, filter: 'agNumberColumnFilter',  width:80, headerName:'N°' },
        { field: 'Nom', resizeable:true, filter:true ,},
        { field: 'Prenom', resizeable:true, filter:true },
        { field: 'Contact', resizeable:true, filter: 'agNumberColumnFilter' },
        { field: 'Date', resizeable:true, headerName: "Date d'inscription", cellRenderer:(Numero) => <CellBtn num={Numero.data}/> },
    ])

   

  return (
    <div className="ag-theme-alpine" style={{height: '60vh', width: '100%'}}>
                    <label htmlFor="my-modal" >open modal</label>

<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
<div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
    <label htmlFor="my-modal" className="btn">Yay!</label>
    </div>
</div>
</div>

           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}
               
               >
                
           </AgGridReact>
       </div>
  )
}

export default Patients
