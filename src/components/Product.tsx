import React, { useState } from "react";
import { headphones } from "../data/products";
import { IProduct } from "../models";
import star from "../images/ratingLogo.svg"
import { idText } from "typescript";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface ProductProps{
    product: IProduct
}


export function Product({product}: ProductProps){

    const{
        getItemQuntity,
        increaseCartQuntity,
        decreaseCartQuntity,
        removeFromCart,
    } = useShoppingCart()

    const quantity = getItemQuntity(product.id)

    return(
        <div className=' flex flex-col justify-end items-center shadow-2xl w-[350px] h-[407px] rounded-3xl mx-5  border-2 pt-5'>
            <img src={product.img} className="py-10" alt={product.title} />
            <div className="flex py-4" >
                <span className="font-semibold mx-8">{product.title}</span>
                <span className="text-yellow-400 mx-8 font-semibold">{product.price}₽</span>
            </div>
            <div className="flex pb-6">
                <img src={star} className="" alt="rate" />
                <p className="pl-2 text-gray-600 mr-12">{product.rate}</p>
                <button type="submit" className="font-bold ml-20"
                 onClick={() => increaseCartQuntity(product.id)}
                >Купить</button>
            </div>
    

        </div>
    )
}