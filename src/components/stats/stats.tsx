import React from "react";
import {useAppSelector} from "@/globalState/appStore";
import {selectGameStory} from "@/globalState/gameSlice/gameSelector";
import {Stat} from "@/components/stats/stat";

type props = {}

export function Stats({}:props) {
    const gameStories = useAppSelector(selectGameStory)
   return (
       <div className={"flex flex-col gap-3"}>
           {Object.entries(gameStories).map(([diff,diffStories]) => <Stat key={`diffifulty-${diff}`} diff={diff} stories={diffStories}/>)}
       </div>
   )
}

