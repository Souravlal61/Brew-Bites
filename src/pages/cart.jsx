import React from "react";
import {useCart} from "react-use-cart"
import { useNavigate } from "react-router-dom";


const Cart = () => {
    let Navigate=useNavigate()
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
        <section className="py-4 bg-orange-50">
            <div className="row justify-center">
                <div className="container-md">
                    <h5 className="text-2xl font-bold text-gray-900 dark:text-white m-4">Cart : ({totalUniqueItems}) <br/>Total Items : ({totalItems})</h5>
                    <div className="justify-evenly align-middle flex">
                    <div class="ml-4 p-4">
     

                       
                   
                       
                       
                        {items.map((items, index)=>{
                           
                            return(
                                
                         <tr key={index}>
                            
                            
                         
                                <img className="m-5"
                                src={items.img} style={{width:'14rem'}}/>
                          <p className="ml-4 text-1xl font-bold text-gray-900 dark:text-white mt-1">{items.title}</p>   
                          <h1 className="ml-4 text-1xl font-bold text-gray-900 dark:text-white">Price : ({items.price})</h1>                           
                          <h2 className="ml-4 text-1xl font-bold text-gray-900 dark:text-white">Quantity : ({items.quantity})</h2>
                          
                            
                            <button
                         className="ml-4 bg-teal-400 rounded-lg w-8 m-2 font-bold"
                         onClick={()=>updateItemQuantity(items.id, items.quantity - 1)}
                         >-</button>
                        <button 
                        className="bg-teal-400 rounded-lg w-8 font-bold"
                        onClick={()=>updateItemQuantity(items.id, items.quantity + 1)}
                        >+</button>
                        <button 
                        className=" bg-cyan-900 hover:bg-cyan-400 text-blue-50 rounded-lg m-3 ml-1 mt-2 w-20"
                        onClick={()=>removeItem(items.id)}
                        >Remove</button>
                    
                        
                            </tr>)
                              
                        })}
                        
                        </div>
                    </div>
                
                </div>
                <div className="col-auto ms-auto">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Total Price : ₹ {cartTotal}</h2>
                   
                </div>
                <div className="col-auto">
                    <button 
                    className="bg-gray-900 m-5 border:4px text-white rounded-lg w-28"
                    onClick={()=>emptyCart()}
                    >Clear Cart</button>
                    <button className="bg-gray-900  text-white rounded-lg w-28" onClick={()=>{Navigate('/order')}}>Buy Now</button>
                </div>
             
            </div>
        </section>
   
    );
};
export default Cart;