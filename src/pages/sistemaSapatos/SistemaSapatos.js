import React, { useState } from 'react';
import { Navbar, Forms, Tabela, Footer } from '../../components';

import api from "../../services/api";


const SistemaSapatos = () => {

    const [table_rows, setTableRows] = useState([]);
    const [sapato, setSapato] = useState({
        name: "",
        size: "",
        brand: ""
    });


    const handleDelete = async () => {

    }

    const handleAtualizar = async () => {

    }

    const getAllShoes = async () => {
        await api.get("/api/shoes")
            .then(response => {
                // setting response data to the state
                setTableRows(response.data.data.shoes);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='w-full mt-10'>
            <Navbar />
            <div className='w-fit flex flex-col justify-center items-center mx-auto'>
                <Forms sapato={sapato} setSapato={setSapato} getAllShoes={getAllShoes}/>
            </div>
            <div className='w-full flex flex-col justify-center items-center mx-auto my-14'>
                <Tabela table_rows={table_rows} getAllShoes={getAllShoes} handleDelete={handleDelete} handleAtualizar={handleAtualizar} />
            </div>
            <Footer />
        </div>

    )
}

export default SistemaSapatos;