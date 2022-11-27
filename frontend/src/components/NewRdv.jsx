import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPatients } from '../redux/patients';
import { emptyedArr, manageRem, manageSymp, manageVent } from '../redux/rdv';
import Input from './input/Input'
import TextArea from './input/TextArea';

const CheckBOX = ({ value, title }) => {


    const [focusBtn, setFocusBtn] = useState(false);

    const dispatchSympt = useDispatch();
    const dispatchVent = useDispatch();
    const dispatchRem = useDispatch();

    useEffect(() => {
        console.log(focusBtn);
        return () => {
            setFocusBtn(false)
            console.log(focusBtn);

        }
    }, [])


    const dispRdvAction = () => {
        setFocusBtn(!focusBtn)
        switch (value) {
            case 'symptome':
                dispatchSympt(manageSymp(title))
                break
            case 'remede':
                dispatchRem(manageRem(title))
                break

            case 'ventouse':
                dispatchVent(manageVent(title))


                break;

            default:
                break;
        }
    }


    return (
        <div
            onClick={dispRdvAction}
            style={{ backgroundColor: focusBtn ? "blueviolet" : "white" }}
            className="border-2 border-primary rounded-lg px-2 py-1 flex items-center justify-center">
            <div className="">
                <p style={{ color: focusBtn ? "white" : null }} className=" text-primary  cursor-pointer">
                    {title}
                </p>
            </div>
        </div>
    )
}

function NewRdv({newrdv}) {


    const [symptome, setSymptome] = useState([]);
    const [dateRdv, setDateRdv] = useState();
    const [raki, setRaki] = useState();
    const dataStored = useSelector(state => state.rendezVous);
    const patientId = useSelector(state => state.patients.patient.id);




    const rakis = useSelector(state => state.personels);

    const centerId= JSON.parse(localStorage.getItem('centreInfo'));
    const secretaire= JSON.parse(localStorage.getItem('userInfos'));

    const dispatch = useDispatch()

    const addSymptop = ({ title }) => {

        setSymptome(title)
    }

    const addConsultation = () => {
        // loading(true);
        const data = {
            carnetId: patientId,
            rdv: {
                secretaire: secretaire.nom + secretaire.prenom,
                rakis: raki,
                date_consultation: new Date().toLocaleDateString(),
                date_rdv: dateRdv,
                symptome: dataStored.symptomes,
                ventouse: dataStored.ventouses,
                remede: dataStored.remede
            }

        }

        console.log(data);
        axios.post("http://localhost:3001/api/roqya_ci/rdv_create", data)
            .then(res => {


                if (res.data) {
                    setTimeout(() =>{
                        dispatch(getPatients(centerId.id))

                    }, 2000)
                    // loading(true)
                    newrdv(false)
                    dispatch(emptyedArr())
                      document.getElementById('patient-detail-modal').click();
                }
            })
            .catch(error => {
                
                console.log(error)
            })
    }



    return (
        <div>
            <>
                <div className=" shadow sm:overflow-hidden sm:rounded-md">
                    
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            {/* <Input/> */}
                        </div>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <Input
                                    value={dateRdv}
                                    setValue={setDateRdv}
                                    label="Rendez-vous"
                                    type="date" />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <h2 className='font-semibold' >Raki</h2>
                                <select
                                    onChange={(e) => setRaki(e.target.value)}
                                    className="select mt-1 select-accent w-full max-w-xs">
                                    <option disabled selected>Selectionner un raqki </option>
                                    {
                                        rakis?.map((raki, index) => <option>{raki.nom} {raki.prenom}</option>)
                                    }
                                </select>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <div className="flex">
                                    <h2>Symptôme</h2>
                                    <div className="flex flex-wrap  gap-4 ml-6">

                                        <CheckBOX value="symptome" setValue="" title="Manggé" />
                                        <CheckBOX value="symptome" setValue="" title="L'eau" />
                                        <CheckBOX value="symptome" setValue="" title="l'aire" />
                                        <CheckBOX value="symptome" setValue="" title="Cimétière" />
                                        <CheckBOX value="symptome" setValue="" title="Voyagé" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <div className="flex">
                                    <h2>Ventouses</h2>
                                    <div className="flex flex-wrap  gap-4 ml-6">

                                        <CheckBOX value="ventouse" setValue="" title="Front" />
                                        <CheckBOX value="ventouse" setValue="" title="Nuque" />
                                        <CheckBOX value="ventouse" setValue="" title="Coeur" />
                                        <CheckBOX value="ventouse" setValue="" title="Seins" />
                                        <CheckBOX value="ventouse" setValue="" title="Ovaire" />
                                        <CheckBOX value="ventouse" setValue="" title="Pubis" />
                                        <CheckBOX value="ventouse" setValue="" title="Epaules" />
                                        <CheckBOX value="ventouse" setValue="" title="Omoplates" />
                                        <CheckBOX value="ventouse" setValue="" title="Reins" />
                                        <CheckBOX value="ventouse" setValue="" title="Mollets" />
                                        <CheckBOX value="ventouse" setValue="" title="Bras" />
                                        <CheckBOX value="ventouse" setValue="" title="Cuisse" />
                                        <CheckBOX value="ventouse" setValue="" title="Colonne vertébrale" />
                                        <CheckBOX value="ventouse" setValue="" title="tête" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <div className="flex">
                                    <h2>Rémède</h2>
                                    <div className="flex flex-wrap  gap-4 ml-6">

                                        <CheckBOX value="remede" setValue="" title="Sana Makki" />
                                        <CheckBOX value="remede" setValue="" title="Psychothérapie" />
                                        <CheckBOX value="remede" setValue="" title="Encens" />
                                        <CheckBOX value="remede" setValue="" title="Pommade" />
                                        <CheckBOX value="remede" setValue="" title="Huile" />
                                        <CheckBOX value="remede" setValue="" title="Savon" />
                                        <CheckBOX value="remede" setValue="" title="Pommade mentholeé" />
                                        <CheckBOX value="remede" setValue="" title="Miel coranisé" />
                                        <CheckBOX value="remede" setValue="" title="Reins" />
                                        <CheckBOX value="remede" setValue="" title="Mollets" />
                                        <CheckBOX value="remede" setValue="" title="Bras" />
                                        <CheckBOX value="remede" setValue="" title="Cuisse" />
                                        <CheckBOX value="remede" setValue="" title="Colonne vertébrale" />
                                        <CheckBOX value="remede" setValue="" title="tête" />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <label
                            htmlFor="patient-detail-modal"
                            type="submit"
                            className="inline-flex justify-center 
                        rounded-md border cursor-pointer
                        border-2 
                        bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm 
                        hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Annuler

                        </label>
                        <label
                            onClick={addConsultation}
                            type="submit"
                            className="inline-flex ml-4 justify-center cursor-pointer rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Enregistrer
                        </label>
                    </div>
                </div>
            </>

        </div>
    )
}

export default NewRdv
