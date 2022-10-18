import React from "react";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Product } from "../components/Product";
import { headphones } from "../data/products";
import { IProduct } from "../models";
import { ShoppingCart } from "../components/ShoppingCart";
import { isTemplateExpression } from "typescript";
import { useShoppingCart } from "../context/ShoppingCartContext";


export function CartPage(){

    const{cartItems} = useShoppingCart()
    return(
        <>
        <Nav/>
        <div className="flex mt-4">
            <div>
                <h1 className="font-semibold text-lg  text-gray-700 px-5 py-2">Корзина</h1>
                <ShoppingCart/>
                </div>
            
        <div className="flex flex-col border-2 shadow-2xl rounded-3xl w-[348.98px] h-[114px] mx-20 my-14">
            <div className="flex justify-between py-2 px-4 shadow-2xl  ">
                <p className="px-4 py-2 font-medium text-lg">ИТОГО</p>
                <p className="px-4 py-2 font-medium text-lg">₽{" "}
                    {cartItems.reduce((total,cartItem) => {
                        const item = headphones.find(i => i.id === cartItem.id)
                        return total + (item?.price || 0) * cartItem.quantity},0)
                }</p>
            </div>
            <div className="shadow-2xl">
                <button className="bg-black w-full h-20 text-lg text-white rounded-3xl">Перейти к оформлению</button>
            </div>
        </div>
        </div>
            <Footer />
        </>
    )
}