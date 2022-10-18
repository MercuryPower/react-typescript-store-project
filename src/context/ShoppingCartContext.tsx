import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../components/Product";
import { ShoppingCart } from "../components/ShoppingCart";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { ProductsPage } from "../pages/ProductsPage";
import { useSessionStorageState } from "../use-storage";

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuntity: (id: number) => number
    increaseCartQuntity: (id: number) => void
    decreaseCartQuntity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuntity: number
    cartItems:CartItem[]
}

export function ShoppingCartProvider( {children} : ShoppingCartProviderProps){
    const [cartItems,setCartItems] = useSessionStorage<CartItem[]>(
        "shopping-cart",
        []
        )
    
    const cartQuntity = cartItems.reduce((quntity,item) => item.quantity + quntity, 0)


    function getItemQuntity(id: number){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    function increaseCartQuntity(id:number){
        setCartItems(currItems =>{
            if(currItems.find(item => item.id === id) == null){
                return [...currItems,{id,quantity: 1}]
            }else{
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    function decreaseCartQuntity(id:number){
        setCartItems(currItems =>{
            if(currItems.find(item => item.id === id)?.quantity === 1){
                return currItems.filter(item => item.id !== id)
            }else{
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id:number){
        setCartItems(currItems =>{
            return currItems.filter(item => item.id !== id)
        })
    }

    return <ShoppingCartContext.Provider value = {
        {getItemQuntity,increaseCartQuntity,decreaseCartQuntity
        ,removeFromCart,cartItems,cartQuntity}}>
        {children}
    </ShoppingCartContext.Provider>
}