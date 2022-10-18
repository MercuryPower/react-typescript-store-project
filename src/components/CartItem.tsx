import { useShoppingCart } from "../context/ShoppingCartContext"
import { headphones } from "../data/products";
import { IProduct } from "../models";
import { CartPage } from "../pages/CartPage";
import plus from "../images/+.svg"
import minus from "../images/minus.svg"
import removeBucket from "../images/removeBucket.svg"

interface CartItemProps {
    id: number
    quantity:number
}
interface ProductProps{
    product: IProduct
}


export function CartItem({id,quantity} : CartItemProps, {product} :ProductProps ){
     const {removeFromCart,increaseCartQuntity,decreaseCartQuntity} = useShoppingCart()
     const item = headphones.find(i => i.id === id)
     if (item == null) return null
     
     return(
        <div>
            <div className="flex justify-between shadow-2xl w-[633px]  ml-6  mt-2 border-2 rounded-3xl my-6">
                <div className="px-4 py-2">
                    <img src={item.img} alt="" />
                        <div className="flex items-center justify-between px-4 py-2">
                            <button onClick={() => increaseCartQuntity(id)}><img src={plus} className='pl-4'  alt="" /></button>
                            <p className="">{quantity}</p>
                            <button onClick={() => decreaseCartQuntity(id)}><img src={minus} className='pr-4' alt="" /></button>
                        </div>
                </div>
            <div className="flex flex-col justify-center mr-20">
                <p className="font-semibold">{item.title}</p>
                <p className=" text-gray-500 font-semibold tracking-widest">{item.price * quantity}₽</p>            
            </div>
                <div className="flex items-end py-2 pl-12">
                    <p className=" font-semibold tracking-widest">{item.price * quantity}₽</p>
                </div>
            <div className="flex items-start">
            <button  className="py-2 px-4" type="submit" onClick={() => removeFromCart(id)}><img src={removeBucket} alt="removeBucket" /></button>
            </div>
            </div>
            </div>
     )
}
