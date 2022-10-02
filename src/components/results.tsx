import React, { FC } from "react";
import LineDivider from './common/lineDivider';

const Results: FC = () => {

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