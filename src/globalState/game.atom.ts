import {atom} from "jotai";
import {Cell} from "@/utils/table/Cell";
import {focusAtom} from "jotai/optics";

type gameAtomType = {
    table:Cell[][],
    selectedCoordinates:{
        column:number,
        row:number
    }
}

export const gameAtom = atom<gameAtomType>({
    table:[],
    selectedCoordinates:{
        column:-1,
        row:-1
    }
})

export const GameTableAtom = focusAtom(gameAtom, (optic) => optic.prop("table"))
export const selectedCoordinatesAtom = focusAtom(gameAtom, (optic) => optic.prop("selectedCoordinates"))