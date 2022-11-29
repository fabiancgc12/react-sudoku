import React, {ReactNode} from "react";

export function AboutPage(){
    return (
        <div>
            <h1 className="font-bold text-slate-200 text-3xl border-b-2 border-white mb-4 w-2/4">About</h1>
            <section className="w-full md:w-1/3 min-w-fit max-w-lg flex flex-col gap-2">
                <DataLabel label={"Made by"} info={"Fabian Graterol"}/>
                <DataLabel label={"Github"} info={
                    <a href="https://github.com/fabiancgc12" target="blank">fabiancgc12</a>
                }/>
                <DataLabel label={"Made with"} info="React, typescript, RTK and Tailwind"/>
                <DataLabel label={"Credits to"} info={
                    <span>
                        <a href="https://github.com/robatron/sudoku.js" target="_blank">github.com/robatron</a>
                        <p>For the library that generates de sudoku table and its solution</p>
                    </span>
                }/>
            </section>
        </div>
    )
}

type DataLabelProp = {
    label:string,
    info:ReactNode
}

function DataLabel({label,info}:DataLabelProp){
    return (
        <div className="rounded bg-neutral-800 p-2 flex gap-2 flex">
            <span className="text-zinc-400 min-w-fit">{label}: </span>
            <span className="text-slate-200">{info}</span>
        </div>
    )
}