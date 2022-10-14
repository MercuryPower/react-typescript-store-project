import React from "react";
import { headphones } from "../data/products";
import { IProduct } from "../models";
import star from "../images/ratingLogo.svg"
import { title } from "process";

interface ProductProps{
    product: IProduct
}

export function Product({product}: ProductProps){
    return(
        <div className='flex flex-col mx-20 my-4 shadow-2xl items-center rounded-2xl max-h-full max-w-xs border pt-5 container'>
            <img src={product.img} alt={product.title} />
            <div className="flex py-4 mx-auto">
                <span className="font-semibold mx-8">{product.title}</span>
                <span className="text-yellow-400 mx-8 font-semibold">{product.price}₽</span>
            </div>
            <div className="flex py-2 justify-between ">
                <img src={star} alt="rate" /><p className="pr-16">{product.rate}</p>
                <button type="submit" className="font-bold pl-20">Купить</button>
            </div>


        </div>
    )
}