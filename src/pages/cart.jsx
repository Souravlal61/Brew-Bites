import React from "react";
import {useCart} from "react-use-cart"
const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if(isEmpty) return <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white">Your Cart is Empty</h1>
    return(
        <section className="py-4 container">
            <div className="row justify-center">
                <div className="container-md">
                    <h5>Cart ({totalUniqueItems}) total Items :({totalItems})</h5>
                    <table className="flex justify-between align-middle">
                        <tbody>
                        {items.map((items, index)=>{
                            return(
                            <tr key={index}>
                            <td>
                                <img 
                                src={items.img} style={{width:'10rem'}}/>
                            </td>
                            <td>{items.title}</td>
                            <td>{items.price}</td>
                            <td>Quantity : ({items.quantity})</td>
                            <td>
                                <button
                                 className="bg-teal-400 m-3"
                                 onClick={()=>updateItemQuantity(items.id, items.quantity - 1)}
                                 >-</button>
                                <button 
                                className="bg-teal-400 m-6"
                                onClick={()=>updateItemQuantity(items.id, items.quantity + 1)}
                                >+</button>
                                <button 
                                className=" bg-cyan-900 hover:bg-cyan-400 text-blue-50"
                                onClick={()=>removeItem(items.id)}
                                >Remove Item</button>
                            </td>
                            </tr>)
                        })}
                        </tbody>
                    </table>
                
                </div>
                <div className="col-auto ms-auto">
                    <h2>Total Price : ₹ {cartTotal}</h2>
                </div>
                <div className="col-auto">
                    <button 
                    className="bg-gray-900 m-5 border:4px text-white"
                    onClick={()=>emptyCart()}
                    >Clear Cart</button>
                    <button className="bg-gray-900  text-white">Buy Now</button>
                </div>
            </div>
        </section>
   
    );
};
export default Cart;