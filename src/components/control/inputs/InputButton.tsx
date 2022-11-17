import {useDispatch} from "react-redux";
import {setCellValue, setSelectedCell} from "@/globalState/gameSlice/gameSlice";

type props = {
  value:number
}

export function InputButton({value}:props){
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(setCellValue(value))
    }
    return (
       <button
           className={`inputValueButton relative rounded-full w-14 h-14 bg-gray-900 text-slate-200 font-bold text-xl
                        after:content-[''] after:absolute after:rounded-full after:-z-10 after:top-2/4 after:left-2/4 after:w-16 after:h-16 after:-translate-y-2/4 after:-translate-x-2/4
                        hover:bg-gray-600`}
           onClick={onClick}
       >
           {value}
       </button>
   )
}