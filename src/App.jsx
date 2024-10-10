import React from 'react';
import { Navbar } from './Componentes/Menu/Navbar';
import { Footer } from './Componentes/Footer/Footer';
import { Sobre } from './Componentes/Sobre/Sobre';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar />
            <div className='bg-[url(/Fondo.png)] w-screen h-screen absolute inset-0 -z-10 '>
            </div>
            <Outlet></Outlet>
            
            <div className='absolute bottom-1 w-full'>
                <Footer /></div>
        </div>
    );
};

export default App;
