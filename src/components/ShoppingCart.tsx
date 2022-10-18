import { idText, isTemplateExpression } from "typescript"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { CartItem } from "./CartItem"

export function ShoppingCart (){
    const{cartItems} = useShoppingCart()
    return (
            <>
            {cartItems.map(item => (
            <CartItem key={item.id}{...item}/>))}
            </>
    )
}