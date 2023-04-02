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
                    <h5 className="text-2xl font-bold text-gray-900 dark:text-white m-4">Cart : ({totalUniqueItems}) Total Items : ({totalItems})</h5>
                    <table className="flex justify-between align-middle">
                        <tbody>
                        {items.map((items, index)=>{
                            return(
                            <tr key={index}>
                            <td>
                                <img className="m-4"
                                src={items.img} style={{width:'10rem'}}/>
                            </td>
                            <td className="text-1xl font-bold text-gray-900 dark:text-white">{items.title}</td>
                            <td className="text-1xl font-bold text-gray-900 dark:text-white">Price : ({items.price})</td>
                            <td className="text-1xl font-bold text-gray-900 dark:text-white">Quantity : ({items.quantity})</td>
                            <td>
                                <button
                                 className="bg-teal-400 rounded-lg w-8 m-3 font-bold"
                                 onClick={()=>updateItemQuantity(items.id, items.quantity - 1)}
                                 >-</button>
                                <button 
                                className="bg-teal-400 rounded-lg w-8 font-bold"
                                onClick={()=>updateItemQuantity(items.id, items.quantity + 1)}
                                >+</button>
                                <button 
                                className=" bg-cyan-900 hover:bg-cyan-400 text-blue-50 rounded-lg w-28 m-6"
                                onClick={()=>removeItem(items.id)}
                                >Remove Item</button>
                            </td>
                            </tr>)
                        })}
                        </tbody>
                    </table>
                
                </div>
                <div className="col-auto ms-auto">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Total Price : ₹ {cartTotal}</h2>
                   
                </div>
                <div className="col-auto">
                    <button 
                    className="bg-gray-900 m-5 border:4px text-white rounded-lg w-28"
                    onClick={()=>emptyCart()}
                    >Clear Cart</button>
                    <button className="bg-gray-900  text-white rounded-lg w-28">Buy Now</button>
                </div>
            </div>
        </section>
   
    );
};
export default Cart;