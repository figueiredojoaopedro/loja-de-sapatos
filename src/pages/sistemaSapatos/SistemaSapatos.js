import React, { useState } from 'react';
import { Navbar, Forms, Tabela, Footer } from '../../components';

import api from "../../services/api";


const SistemaSapatos = () => {

    const [funcaoBotaoSubmit, setFuncaoBotaoSubmit] = useState("Cadastrar");
    const [mensagem, setMensagem] = useState("")

    const [table_rows, setTableRows] = useState([]);
    const [sapato, setSapato] = useState({
        name: "",
        size: "",
        brand: ""
    });

    const handleDelete = async (event, obj) => {
        event.preventDefault();
        await api.delete(`/api/shoes/${obj._id}`)
            .then(response => {
                console.log("Item deletado", response);
                setMensagem("Item deletado com sucesso!");
                getAllShoes();
            })
            .catch( err => {
                console.log("err", err);
            } )
    }

    const handleAtualizar = async (event, obj) => {
        event.preventDefault();
        setFuncaoBotaoSubmit("Atualizar");

        setSapato({
            name: obj.name,
            size: obj.size,
            brand: obj.brand,
            _id: obj._id
        })
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
                <Forms funcaoBotaoSubmit={funcaoBotaoSubmit} setFuncaoBotaoSubmit={setFuncaoBotaoSubmit} mensagem={mensagem} setMensagem={setMensagem} sapato={sapato} setSapato={setSapato} getAllShoes={getAllShoes}/>
            </div>
            <div className='w-full flex flex-col justify-center items-center mx-auto my-14'>
                <Tabela setFuncaoBotaoSubmit={setFuncaoBotaoSubmit} table_rows={table_rows} getAllShoes={getAllShoes} handleDelete={handleDelete} handleAtualizar={handleAtualizar} />
            </div>
            <Footer />
        </div>

    )
}

export default SistemaSapatos;