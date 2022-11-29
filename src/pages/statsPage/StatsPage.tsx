import React from "react";
import {Stats} from "@/components/stats/stats";

export function StatsPage(){
    return (
        <div className={""}>
            <h1 className="font-bold text-slate-200 text-3xl border-b-2 border-white mb-4 w-2/4">Statistics</h1>
            <Stats/>
        </div>
    )
}