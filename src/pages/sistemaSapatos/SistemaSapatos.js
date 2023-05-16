import React from 'react'
import { Navbar, Forms, Tabela, Footer } from '../../components'

const SistemaSapatos = () => {
    return (
        <div className='w-full mt-10'>
            <Navbar />
            <div className='w-fit flex flex-col justify-center items-center mx-auto'>
                <Forms />
            </div>
            <div className='w-full flex flex-col justify-center items-center mx-auto my-14'>
                <Tabela />
            </div>
            <Footer />
        </div>

    )
}

export default SistemaSapatos;