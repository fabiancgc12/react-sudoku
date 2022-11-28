import {GameStory} from "@/globalState/gameSlice/gameSlice";
import {formatMillisecondsToHours} from "@/utils/format/milisecondsToHour";
import {AiOutlineFieldTime, BiTimer} from "react-icons/all";
import {formatMillisecondsToMinutes} from "@/utils/format/milisecondsToMinutes";

type props = {
    diff:string;
    stories:GameStory[];
}

export function Stat({diff,stories}:props){
    let averageTime = 0;
    let bestTime = 0
    stories.forEach(st => {
        averageTime +=  st.time
        if (bestTime == 0 || (bestTime > st.time))
            bestTime = st.time
    })
    // if (!isFinite(bestTime))
    //     bestTime = 0

    return (
        <div className={"flex"}>
            <div className={" basis-20"}>
                <span className="text-slate-200 capitalize">{diff}</span>
            </div>
            <div className="flex flex-col gap-2">
                <div className={"rounded bg-neutral-800 p-2 flex gap-2 items-center"}>
                    <AiOutlineFieldTime className="fill-blue-500"/>
                    <span className="text-slate-200">
                        Average time {formatTime(averageTime/ (stories.length || 1) )}
                    </span>
                </div>
                <div className={"rounded bg-neutral-800 p-2 flex gap-2 items-center"}>
                    <BiTimer className="fill-blue-500"/>
                    <span className="text-slate-200">Best time {formatTime(bestTime)}</span>
                </div>
            </div>
        </div>
    )
}

function formatTime(ms:number){
    if (ms == 0) return <span className={"line-through text-zinc-900"}>Not played</span>
    let {seconds,minutes} = formatMillisecondsToMinutes(ms)
    const minutesPad = minutes.toString().padStart(2,"0")
    const secondsPad = seconds.toString().padStart(2,"0")
    return `${minutesPad}: ${secondsPad}`
}