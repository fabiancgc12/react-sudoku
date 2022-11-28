import {useDispatch} from "react-redux";
import {setCellValue, setSelectedCell} from "@/globalState/gameSlice/gameSlice";
import {useAppSelector} from "@/globalState/appStore";
import {selectCountTableValues, selectCountValue} from "@/globalState/gameSlice/gameSelector";
import {useMemo} from "react";

type props = {
  value:number
}

export function InputButton({value}:props){
    const dispatch = useDispatch()
    const countRightInputs = useAppSelector((state => selectCountValue(state,value))) ?? 0
    const style = useMemo(() => {
        return {"--countDeg": `${countRightInputs*360 / 9}deg`}
    },[countRightInputs])
    const onClick = () => {
        dispatch(setCellValue(value))
    }
    return (
       <button
           // @ts-ignore
           style={style}
           className={`inputValueButton relative rounded sm:rounded-full w-8 h-10 sm:w-14 sm:h-14 bg-gray-900 text-slate-200 font-bold text-xl
                        after:content-[''] after:absolute after:rounded sm:after:rounded-full after:-z-10 after:top-2/4 after:left-2/4 after:w-9 after:h-11 sm:after:w-16 sm:after:h-16 after:-translate-y-2/4 after:-translate-x-2/4
                        hover:bg-gray-600`}
           onClick={onClick}
       >
           {value}
       </button>
   )
}