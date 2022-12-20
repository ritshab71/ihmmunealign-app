import React, { FC } from "react";
import LineDivider from './common/lineDivider';
import { IHMMuneResponseData } from "./dashboard";

type ResultsSectionProps = {
    ihmmuneAlignData: IHMMuneResponseData
}

const ResultsSection: FC<ResultsSectionProps> = (props: ResultsSectionProps) => {
    const {ihmmuneAlignData} = props;

    const alignmentVisual = ihmmuneAlignData.v_aln_info.aln_visual.replace(/ Score=[0-9]+./, '').split('\n');
    // const alignmentInfo = alignmentVisual[1].replace(/\s+/g, '').split('');

    return (
        <div className="flex flex-col basis-3/5 bg-white rounded p-4 space-y-3 text-sm uppercase font-medium text-slate-400 min-w-[400px]">
            <LineDivider/>
            <div className="flex flex-row w-full">
                <div className="flex basis-2/3">A-score</div>
                <div className="flex basis-1/3 justify-end items-center">
                    <div className="bg-violet-300 text-white rounded px-2 py-1 h-8 w-full flex justify-center items-center text-xs">
                        <span className="font-semibold">{ihmmuneAlignData.a_score}</span></div>
                </div>
            </div>
            <LineDivider/>
            <div className="flex flex-col space-y-2 basis-2/12 w-full">
                <div className="w-full">V-gene</div>
                <div className="flex flex-col space-y-3 bg-slate-50 rounded p-3 h-full w-full text-xs text-slate-600 normal-case">
                    <div>Name: <span className="font-semibold">{ihmmuneAlignData.v_aln_info.v_seq_name}</span></div>
                    <div className="flex flex-col space-y-1">
                        <div>Sequence:</div>
                        <span className="font-semibold break-words">{ihmmuneAlignData.v_aln_info.v_sequence}</span>
                    </div>
                </div>
            </div>
            <LineDivider/>
            <div className="flex flex-col space-y-2 basis-2/12 w-full">
                <div className="w-full">Alignment</div>
                <div className="flex bg-slate-50 rounded p-3 h-full w-full text-xs text-slate-600 normal-case">
                    <div className="w-full basis-1/2 space-y-2">
                        <div>Score: <span className="font-semibold">{ihmmuneAlignData.v_aln_info.alignment_info.score}</span></div>
                        <div>Matches: <span className="font-semibold">{ihmmuneAlignData.v_aln_info.alignment_info.matches}</span></div>
                        <div>Gaps: <span className="font-semibold">{ihmmuneAlignData.v_aln_info.alignment_info.gaps}</span></div>
                        <div>Mutations: <span className="font-semibold">{ihmmuneAlignData.v_aln_info.alignment_info.mutations}</span></div>
                    </div>
                    <div className="text-[10px] flex w-fit overflow-x-scroll flex-col">
                        {alignmentVisual[0]}
                    </div>

                </div>
            </div>
            <LineDivider/>
            <div className="flex flex-row w-full">
                <div className="flex basis-2/3">State path probability</div>
                <div className="flex basis-1/3 justify-end items-center">
                    <div className="bg-blue-300 text-white rounded px-2 py-1 h-8 w-full flex justify-center items-center text-xs"><span className="font-semibold">{ihmmuneAlignData.log_probability}</span></div>
                </div>
            </div>
            <LineDivider/>
            <div className="flex flex-col space-y-2 basis-5/12 w-full overflow-y-auto">
                <div className="w-full">HMM Info</div>
                <div className="flex flex-col space-y-3 bg-slate-50 rounded p-3 h-full w-full text-xs text-slate-600 normal-case overflow-y-scroll">
                    <div className="flex flex-col space-y-1">
                        <div>State path:</div>
                        <span className="font-semibold break-words text-[10px]">{ihmmuneAlignData.state_path.join(', ')}</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ResultsSection;