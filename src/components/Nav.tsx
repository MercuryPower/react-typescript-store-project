import React from "react";
import {Link} from 'react-router-dom'
import favoriteLogo from "../images/favoriteLogo.svg"
import cartLogo from "../images/cartLogo.svg"
import cycle from "../images/cycle.svg"
import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Nav(){
    const {cartQuntity} = useShoppingCart()
    return(
        <>
        <header>
            <nav className="flex justify-between items-center px-4 py-2">
            <Link to="/"><h1 className="py-2 font-bold pt-2 text-2xl">QPICK</h1></Link>
                <div className="mr-5 flex items-center">
                    <div className="relative flex z-10 left-8 bottom-2 justify-center items-center ">
                        <img src={cycle} className="" alt="cycle" />
                        <p className="absolute font-medium text-sm text-white">2</p>
                    </div>
                    <img src={favoriteLogo} className="pr-5 relative" alt="" />
                    <Link to="/cart"><div className="relative flex z-10 left-8 bottom-2 justify-center items-center ">
                        <img src={cycle} className="" alt="cycle" />
                        <p className="absolute font-medium text-sm text-white">{cartQuntity}</p>
                    </div></Link>
                    <Link to="/cart"><img src={cartLogo} className="" alt="" /></Link>
                </div>
            </nav>
        </header>
        </>
    )
}