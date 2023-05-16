import React from 'react'

import {
    Card,
    Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Nome", "Marca", "Tamanho", "Atualizar", "Excluir"];

const TABLE_ROWS = [
    {
        name: "John Michael",
        brand: "Manager",
        size: "56",
    },
    {
        name: "Alexa Liras",
        brand: "Developer",
        size: "88",
    },
    {
        name: "Laurent Perrier",
        brand: "Executive",
        size: "99",
    },
    {
        name: "Michael Levi",
        brand: "Developer",
        size: "65",
    },
    {
        name: "Richard Gran",
        brand: "Manager",
        size: "23",
    },
];

export default function Example() {
    return (
        <div className='w-full px-24'>
            <Card className="overflow-scroll h-full w-full">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ name, brand, size }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={name}>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {name}
                                        </Typography>
                                    </td>
                                    <td className={`${classes} bg-blue-gray-50/50`}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {brand}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {size}
                                        </Typography>
                                    </td>
                                    <td className={`${classes} bg-blue-gray-50/50`}>
                                        <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                                            Atualizar
                                        </Typography>
                                    </td>
                                    <td className={`${classes} bg-blue-gray-50/50`}>
                                        <Typography as="a" href="#" variant="small" color="red" className="font-medium">
                                            Deletar
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}