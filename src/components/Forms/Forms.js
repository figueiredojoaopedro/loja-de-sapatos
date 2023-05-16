import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

import { useState } from "react";

export default function Example() {

    const [funcaoBotaoSubmit, setFuncaoBotaoSubmit] = useState("Cadastrar");

    return (
        <div className="flex justify-center items-center mt-20 p-20 bg-white w-full">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Cadastrar/Atualizar novo calçado
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Entre os detalhes do produto abaixo
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Nome" />
                        <Input size="lg" label="Tamanho" type='number' min={0}/>
                        <Input size="lg" label="Marca" />
                    </div>
                    <Button className="mt-6" fullWidth>
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
                </form>
            </Card>
        </div>
    );
}