import React, { FC, useState } from "react";
import TextField from '@mui/material/TextField';

type InputSectionProps = {
    runIhmmuneAlign: (sequence: string) => void
}

const InputSection: FC<InputSectionProps> = (props: InputSectionProps) => {
    const { runIhmmuneAlign } = props;
    const [inputSequence, setInputSequence] = useState<string>('');

    const handleRunIhmmuneAlign = () => {
        runIhmmuneAlign(inputSequence);
    }

    return (
        <div className="flex flex-col basis-2/5 bg-white rounded p-4 space-y-3 text-sm uppercase font-medium text-slate-400 min-w-[400px]">
            <div className="flex flex-col space-y-3 w-full basis-1/2">
                <div className="w-full">IHMMUNE-ALIGN</div>
                <div className="w-full p-2">
                    <TextField
                        fullWidth
                        multiline
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="Input your sequences"
                        rows={14}
                        value={inputSequence || ''}
                        onChange={(event) => setInputSequence(event.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-col space-y-3 w-full basis-1/2">
                <div className="w-full">Parameters</div>
                <div className="w-full p-2">
                    <div className="flex flex-col space-y-3 bg-slate-50 rounded p-3 h-full w-full text-xs text-slate-600 normal-case"></div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <button
                    className={`bg-green-300 hover:bg-green-400 text-white text-xs py-2 px-3 rounded ${!inputSequence ? 'bg-opacity-25 pointer-events-none' : ''}`}
                    onClick={handleRunIhmmuneAlign}
                    disabled={!inputSequence}
                >
                    iHMMUNE-align
                </button>
            </div>
        </div>
    );
}

export default InputSection;
