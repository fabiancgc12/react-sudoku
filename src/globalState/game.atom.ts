import {atom} from "jotai";
import {Cell} from "@/utils/table/Cell";
import {focusAtom} from "jotai/optics";

type gameAtomType = {
    selectedCoordinates:{
        column:number,
        row:number
    }
}

export const gameAtom = atom<gameAtomType>({
    selectedCoordinates:{
        column:-1,
        row:-1
    }
})

export const selectedCoordinatesAtom = focusAtom(gameAtom, (optic) => optic.prop("selectedCoordinates"))