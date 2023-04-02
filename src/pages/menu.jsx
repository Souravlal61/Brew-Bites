import React from 'react'
import Itemcard from './Itemscard'
import data from './data'
export default function Menu(){
    return(
        <>
        <h1 className='text-center mt-4 text-2xl font-bold text-gray-900 dark:text-white'>Our Menu</h1>
        <section className='py-4 container'>
            <div className='row justify-center'>
                {data.productData.map((items,index)=>{
                    return(
                        <Itemcard img={items.img} 
                        title={items.title} 
                        desc={items.desc} 
                        price={items.price}
                        item={items} 
                        key={index}/>
                    )
                })}
               
            </div>
        </section>

        </>
    )
}