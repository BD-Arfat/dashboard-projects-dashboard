import React from 'react';
import Slider from '../Slider/Slider';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
    return (
        <div className='flex flex-row bg-neutral-200 h-screen  overflow-hidden'>
            <Slider/>
            <div className='flex flex-col flex-1'>
                <Navbar/>
                <div className="flex-1 p-4 min-h-0 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layouts;