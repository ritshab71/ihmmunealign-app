import React, { FC } from "react";
import CircularProgress from '@mui/material/CircularProgress';


const Loader: FC = () => {
    return (
        <div className="h-72 w-72 bg-white absolute flex flex-col space-y-8 justify-center items-center blur-none rounded shadow-md z-20 bg-top top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <div className="uppercase font-semibold text-slate-500 text-sm">Loading results</div>
            <CircularProgress />
        </div>
    );
}

export default Loader;
