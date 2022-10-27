import React,{useState} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {EyeIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { getPatient } from '../../redux/patients';
import Details from '../patientDetail/Details';


function Patients() {

    const patients = useSelector(state => state.patients.pats);
    // console.log(patients);

    const [rowData] = useState(patients);
    const dispatch = useDispatch();

    
    const CellBtn = ({num}) =>{
        return <label 
          onClick={() => {
              dispatch(getPatient(num))
              document.getElementById("patient-popup").click() ;
            //   console.log(num);
        }}
          className=' bg-slate-500 text-white rounded-lg p-2 cursor-pointer' 
          
           >Voir fiche</label>
    }
    
    const [columnDefs] = useState([
        { field: 'id', resizeable:true, filter: 'agNumberColumnFilter',  width:80, headerName:'N°' },
        { field: 'Nom', resizeable:true, filter:true ,},
        { field: 'Prenom', resizeable:true, filter:true },
        { field: 'Contact', resizeable:true, filter: 'agNumberColumnFilter' },
        { field: 'Date', resizeable:true, headerName: "Date d'inscription", cellRenderer:(Numero) => <CellBtn num={Numero.data}/> },
    ])

   

  return (
    <div className="ag-theme-alpine" style={{height: '60vh', width: '100%'}}>
                    
<label className='hidden' id="patient-popup"  htmlFor="patient-detail-modal"></label>

<input type="checkbox" id="patient-detail-modal" className="modal-toggle" />
<div className="modal backdrop-blur-sm">
<div className="modal-box w-8/12 max-w-5xl h-auto">

     <Details/>

    <div className="modal-action">
    <label htmlFor="patient-detail-modal" className="btn">Yay!</label>
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
