import React from "react";
import LineDivider from "./common/lineDivider";

const Results = () => {

    return (
        <div className="flex flex-col basis-1/2 bg-white rounded p-4 space-y-3 text-sm uppercase font-medium text-slate-400 min-w-[400px]">
            <LineDivider/>
            <div className="flex flex-row space-x-4 basis-1/12 w-full">
                <div className="w-full">A-score</div>
            </div>
            <LineDivider/>
            <div className="flex flex-row space-x-4 basis-4/12 w-full">
                <div className="w-full">V-gene</div>
            </div>
            <LineDivider/>
            <div className="flex flex-row space-x-4 basis-3/12 w-full">
                <div className="w-full">Alignment</div>
            </div>
            <LineDivider/>
            <div className="flex flex-row space-x-4 basis-4/12 w-full">
                <div className="w-full">State path probability</div>
            </div>
        </div>

    );
}

export default Results;

{/* <div className="flex basis-2/3">Alignment</div>
<div className="flex basis-1/3 flex-col space-y-2">
    <span>A-score</span>
    <div className="flex bg-slate-50 rounded p-2 h-full">
        <div className="flex justify-center items-center">1.2</div>
    </div>
</div> */}