import React from "react";
import {useCart} from "react-use-cart";

 const Itemcard = (props) => {
    const {addItem} = useCart();
    return(
    
  <>
   
   <div className="ml-6 gap-x-6 gap-y-10 m-3 justify-evenly inline-block">
  <div class=" bg-white p-3 hover:scale-110 border-x-black border-y-black border-2 rounded-xl container">
     
     
    <img class="rounded-t-lg h-36 w-60" src={props.img} />
    
     <div class="p-2"> 
        
            <h5 class="mb-2 text-1xl font-bold tracking-light text-gray-900 dark:text-white">{props.title}</h5>
        
        
        <p class="mb-2 font-sans text-gray-700 dark:text-gray-400">{props.desc}</p>
        <div>
        <span class="font-bold p-4 mb-1  text-gray-900 dark:text-gray-400">Price : ₹{props.price}</span>
        <button class="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() =>addItem(props.item)}> Add to cart </button>
        </div>
        </div>
        </div> 
        </div> 






        </>
        
    );
};
export default Itemcard;