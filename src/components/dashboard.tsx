import React, { FC } from "react";
import Results from './results';
import InputSection from "./inputSection";

const Dashboard: FC = () => {

    return (
        <div className="flex flex-row p-4 space-x-4 w-11/12 bg-[#e8edf1] h-full">
            <InputSection/>
            <Results/>
        </div>

    );
}

export default Dashboard;
