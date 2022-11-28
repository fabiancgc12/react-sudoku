import {GameStory} from "@/globalState/gameSlice/gameSlice";
import {formatMillisecondsToHours} from "@/utils/format/milisecondsToHour";
import {AiOutlineFieldTime} from "react-icons/all";

type props = {
    diff:string;
    stories:GameStory[];
}

export function Stat({diff,stories}:props){
    let fullTime = 0;
    stories.forEach(st => {
        fullTime +=  st.time
    })
    //the stories.length || 1 is in case the length is 0
    const {seconds,minutes,hours} = formatMillisecondsToHours(fullTime/ (stories.length || 1) )

    return (
        <div className={"flex"}>
            <div className={" basis-20"}>
                <span className="text-slate-200 capitalize">{diff}</span>
            </div>
            <div className={"rounded bg-cyan-700 p-2 flex gap-2 items-center"}>
                <AiOutlineFieldTime/>
                <span className="">
                    Average time: {hours} hours: {minutes} minutes: {seconds} seconds
                </span>
            </div>
        </div>
    )
}