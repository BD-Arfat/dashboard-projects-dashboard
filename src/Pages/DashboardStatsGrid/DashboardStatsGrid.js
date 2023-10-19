import React, { useState } from 'react';
import CountUp from 'react-countup';
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'
import ScrollTrigger from 'react-scroll-trigger';

const DashboardStatsGrid = () => {

    const [counterOn, setCounterOn] = useState(false)

    return (
        <div>
            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <div className="flex gap-4">
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                        {counterOn && <CountUp start={0} end={5000} duration={6} delay={0} />}
                        </strong>
                        <span className="text-sm text-green-500 pl-2">+343</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
                    <IoPieChart className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Expenses</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                        {counterOn && <CountUp start={0} end={3432} duration={6} delay={0} />}
                        </strong>
                        <span className="text-sm text-green-500 pl-2">-343</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
                    <IoPeople className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Customers</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                        {counterOn && <CountUp start={0} end={12313} duration={6} delay={0} />}
                        </strong>
                        <span className="text-sm text-red-500 pl-2">-30</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
                    <IoCart className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Orders</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                        {counterOn && <CountUp start={0} end={16432} duration={6} delay={0} />}
                        </strong>
                        <span className="text-sm text-red-500 pl-2">-43</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
            </ScrollTrigger>
        </div>
    );
};

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}

export default DashboardStatsGrid;