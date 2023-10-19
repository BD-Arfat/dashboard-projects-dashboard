import React from 'react';
import DashboardStatsGrid from '../../Pages/DashboardStatsGrid/DashboardStatsGrid';
import TransactionChart from '../../Pages/TransactionChart/TransactionChart';
import BuyerProfilePieChart from '../../Pages/BuyerProfilePieChart/BuyerProfilePieChart';
import RecentOrderData from '../../Pages/RecentOrderData/RecentOrderData';
import PopularProducts from '../../Pages/PopularProducts/PopularProducts';

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-4">
            <DashboardStatsGrid/>
            <div className="flex flex-row">
                <TransactionChart />
                <BuyerProfilePieChart />
            </div>
            <div className="flex flex-row">
                <RecentOrderData/>
                {/* <PopularProducts /> */}
            </div>
        </div>
    );
};

export default Dashboard;