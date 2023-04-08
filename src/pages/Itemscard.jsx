import React from "react";
import {useCart} from "react-use-cart";

 const Itemcard = (props) => {
    const {addItem} = useCart();
    return(
    
  <>
   
    <div className="gap-x-6 gap-y-10 ml-16 m-2 justify-evenly inline-block"> 
        
  <div class=" p-3 hover:scale-110 border-x-black border-y-black border-2 rounded-xl">
     
     
    <img class="rounded-t-lg h-44 w-72" src={props.img} />
    
     <div class="p-5"> 
        
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        
        
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.desc}</p>
        <div>
        <span class="font-bold p-4 mb-3  text-gray-900 dark:text-gray-400">Price : ₹{props.price}</span>
        <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() =>addItem(props.item)}> Add to cart </button>
        </div>
        </div>
        </div> 
        </div>
        </>
        
    );
};
export default Itemcard;