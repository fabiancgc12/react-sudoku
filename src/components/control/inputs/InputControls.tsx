import {InputButton} from "@/components/control/inputs/InputButton";

const values = [1,2,3,4,5,6,7,8,9]

export function InputControl(){
    return (
        <div className={'grid grid-cols-9 place-items-center'}>
            {values.map(v => <InputButton key={`inputValue-${v}`} value={v}/>)}
        </div>
    )
}