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
        <div className='w-[350px] h-[400px] flex flex-col  items-center shadow-2xl rounded-2xl max-w-xs border pt-5'>
            <div className="">
            <img src={product.img} className="" alt={product.title} />
            </div>
            <div className="flex py-4 mx-auto">
                <span className="font-semibold mx-8">{product.title}</span>
                <span className="text-yellow-400 mx-8 font-semibold">{product.price}₽</span>
            </div>
            <div className="flex py-2 justify-between ">
                <img src={star} alt="rate" /><p className="pl-2 pr-16 text-gray-600">{product.rate}</p>
                <button type="submit" className="font-bold ml-20">Купить</button>
            </div>


        </div>
    )
}