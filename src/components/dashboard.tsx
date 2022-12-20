import React, { FC, useState } from "react";
import InputSection from "./inputSection";
import Loader from "./loader";
import ResultsSection from "./resultsSection";

type AlignmentInfo = {
    start1: number,
    start2: number,
    score: number,
    matches: number,
    gaps: number,
    mutations: number
}

type VGeneAlignmentInfo = {
    sequence: string,
    aln_ums: string,
    v_sequence: string,
    v_seq_name: string,
    aln_v_gene: string,
    ums_offset: number,
    v_gene_offset: number,
    alignment_info: AlignmentInfo,
    aln_visual: string
}

type JGeneAlignmentInfo = {
    ums_no_c: string,
    aln_ums: string,
    j_sequence: string,
    j_seq_name: string,
    aln_j_gene: string,
    ums_offset: number,
    j_gene_offset: number,
    aln_visual: string
}

export type IHMMuneResponseData = {
    log_probability: number,
    a_score: number,
    state_path: Array<string>,
    v_aln_info: VGeneAlignmentInfo,
    j_aln_info: JGeneAlignmentInfo
}

const Dashboard: FC = () => {
    const [ihmmuneAlignData, setIhmmuneAlignData] = useState<IHMMuneResponseData>();
    const [isLoadingResults, setLoadingResults] = useState<boolean>(false);

    const runIhmmuneAlign = (inputSequence: string) => {
        setLoadingResults(true);

        fetch(`http://127.0.0.1:5000/getihmmune/?sequence=${inputSequence}`, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        })
        .then(res => { return res.json(); })
        .then(response => {
            const responseData: IHMMuneResponseData = response;
            setIhmmuneAlignData(responseData);
            setLoadingResults(false);
        });
    }

    return (
        <div className={`p-4 w-11/12 bg-[#e8edf1] h-full`}>
            {isLoadingResults && <Loader/>}
            <div className={`space-x-4 flex flex-row w-full h-full ${isLoadingResults ? 'blur-sm' : ''}`}>
                <InputSection runIhmmuneAlign={runIhmmuneAlign}/>
                {ihmmuneAlignData && <ResultsSection ihmmuneAlignData={ihmmuneAlignData}/>}
            </div>
        </div>
    );
}

export default Dashboard;
