import React, {ReactNode} from "react";

type props = {
    children:ReactNode
}

export function Shell({children}:props) {
    return (
        <div className="flex flex-col flex-no-wrap sm:flex-row">
            {/* Sidebar starts */}
            {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
            <div
                className="w-full sm:w-64 sm:h-screen relative bg-gray-800 shadow sm:flex sm:flex-col justify-between"
            >
                <div className="px-8">
                    <ul className="mt-8 flex sm:block">
                        <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid"
                                     width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <rect x={4} y={4} width={6} height={6} rx={1}/>
                                    <rect x={14} y={4} width={6} height={6} rx={1}/>
                                    <rect x={4} y={14} width={6} height={6} rx={1}/>
                                    <rect x={14} y={14} width={6} height={6} rx={1}/>
                                </svg>
                                <span className="text-sm  ml-2">Game</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle"
                                     width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <path
                                        d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"/>
                                </svg>
                                <span className="text-sm  ml-2">Stats</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass"
                                     width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <polyline points="8 16 10 10 16 8 14 14 8 16"/>
                                    <circle cx={12} cy={12} r={9}/>
                                </svg>
                                <span className="text-sm  ml-2">About</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Sidebar ends */}
            {/* Remove class [ h-64 ] when adding a card block */}
            <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                {/*<div className="w-full h-full rounded border-dashed border-2 border-gray-300">/!* Place your content here *!/</div>*/}
                {children}
            </div>
        </div>
    );
}