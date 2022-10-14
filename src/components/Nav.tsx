import React from "react";
import {Link} from 'react-router-dom'

export function Nav(){
    return(
        <>
        <header className="mx-12 my-2">
            <nav className="flex justify-between px-4 py-2">
                <h1 className="font-bold pt-2 text-2xl">QPICK</h1>
                <span className="mr-4 pt-2">
                <a href="" className="">ONE</a>
                <a href="" className="pl-2">TWO</a>
                </span>
            </nav>
        </header>
        </>
    )
}