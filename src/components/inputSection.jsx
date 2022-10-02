import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

const InputSection = () => {

    return (
        <div className="flex flex-col basis-1/2 bg-white rounded p-4 space-y-3 text-sm uppercase font-medium text-slate-400 min-w-[400px]">
            <div className="flex flex-col space-y-3 w-full basis-1/2">
                <div className="w-full">IHMMUNE-ALIGN</div>
                <div className="w-full p-2">
                    <TextField
                        fullWidth
                        multiline
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="Input your sequences"
                        style={{fontSize: 11}}
                        rows={14}
                    />
                </div>
            </div>
            <div className="flex flex-col space-y-3 w-full basis-1/2">
                <div className="w-full">Parameters</div>
                <div className="w-full p-2">
                </div>
            </div>
            <div className="flex justify-center items-center">
                <button className="bg-blue-300 hover:bg-blue-500 text-white text-xs py-2 px-3 rounded">iHMMUNE-align</button>
            </div>
        </div>
    );
}

export default InputSection;
