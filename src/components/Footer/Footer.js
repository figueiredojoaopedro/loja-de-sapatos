import { Typography } from "@material-tailwind/react";

export default function SimpleFooter() {
    return (
        <footer className="p-16 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
            <Typography color="white" className="font-normal">
                &copy; The Best Shoes
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="white"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Suporte
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="white"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Funcionários
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="white"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Admin
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="white"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Log-out
                    </Typography>
                </li>
            </ul>
        </footer>
    );
}