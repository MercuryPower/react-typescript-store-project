import React from "react";
import {Link} from 'react-router-dom'
import favoriteLogo from "../images/favoriteLogo.svg"
import cartLogo from "../images/cartLogo.svg"

export function Nav(){
    return(
        <>
        <header className="mx-12 my-2">
            <nav className="flex justify-between px-4 py-2">
                <h1 className="font-bold pt-2 text-2xl">QPICK</h1>
                <div className="flex pt-3 mr-20 ">
                    <img src={favoriteLogo} className="pr-16" alt="" />
                    <img src={cartLogo} alt="" />
                </div>
            </nav>
        </header>
        </>
    )
}