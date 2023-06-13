import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

import api from "../../services/api";

import { useEffect, useState } from "react";

export default function Example(props) {

    const [funcaoBotaoSubmit, setFuncaoBotaoSubmit] = useState("Cadastrar");
    const [mensagem, setMensagem] = useState("")

    useEffect(() => {
        setMensagem("");
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("teste", props.sapato );

        if (funcaoBotaoSubmit === "Cadastrar"){
            await api.post("/api/shoes/", props.sapato)
                .then( response => {
                    console.log("response", response);
                    setMensagem("Cadastrado com sucesso.");
                    props.getAllShoes();
                })
                .catch( err => {
                    setMensagem("O cadastro não foi realizado.")
                    console.log("error", err);
                })
        }

        // await api.patch("")
    }

    const onChangeForms = (event) => {
        let { name, value } = event.target;

        props.setSapato((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="flex justify-center items-center mt-20 p-20 bg-white w-full">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Cadastrar/Atualizar novo calçado
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Entre os detalhes do produto abaixo
                </Typography>
                <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input value={props.sapato.name} onChange={onChangeForms} size="lg" name="name" label="Nome" />
                        <Input value={props.sapato.size} onChange={onChangeForms} size="lg" name="size" label="Tamanho" type='number' min={0}/>
                        <Input value={props.sapato.brand} onChange={onChangeForms} size="lg" name="brand" label="Marca" />
                    </div>
                    <Button type="submit" className="mt-6" fullWidth>
                        {funcaoBotaoSubmit}
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Está precisando de ajuda?{" "}
                        <a
                            href="#"
                            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                        >
                            Chame um suporte.
                        </a>
                    </Typography>
                    <Typography
                        className="font-medium text-black">
                        {mensagem}
                    </Typography>
                </form>
            </Card>
        </div>
    );
}