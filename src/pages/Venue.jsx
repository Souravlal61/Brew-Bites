import { useNavigate } from "react-router-dom";
import React, {useState} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export default function Venue(){



    const history=useNavigate();

    const [email, setEmail] = useState('')
     const [name, setName] = useState('')
     const [phoneNumber, setPhoneNumber] = useState('')
     const [date, setDate] = useState('')
     const [discription, setDiscription] = useState('')
     async function submit(e){
      e.preventDefault();
  
      try{
          await axios.post("http://localhost:5000/venue",{
            email,phoneNumber,name,date,discription
          })
          .then(res=>{
            if(res.data=="exist"){
              alert("You have already applied.")
               
            }
           else if(res.data=="not exist"){
             history("/menu",{state:{id:email}})
           }
           })
  
           .catch(e=>{
            alert("wrong details")
            console.log(e);
           })
      }
  
      catch(e){
         console.log(e);
  
      }
     }
  
  




  return(
    <>
    <section class="bg-gradient-to-r from-cyan-500 to-blue-100 dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Brew & Bites</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Fill This Forn To Book A Venue.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
              <input type="email" id="email" onChange={(e)=> {setEmail(e.target.value)}} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
              <input type="text" id="subject" onChange={(e)=> {setName(e.target.value)}} class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="your name" required/>          </div>
          

              <div class="sm:col-span-2">
                  <label for="PhoneNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                  <input type="integer" name="name" onChange={(e)=> {setPhoneNumber(e.target.value)}} id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="phone number" required=""></input>             </div>
             
              <div>
                  <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Party & Meeting Date</label>
                  <textarea id="date" rows="1" onChange={(e)=> {setDate(e.target.value)}} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Date"></textarea>
          </div>
              
          
          <div class="sm:col-span-2">
              <label for="discription" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Small Discription About Party Theme.</label>
              <textarea id="discription" rows="6" onChange={(e)=> {setDiscription(e.target.value)}} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Discription..."></textarea>
          </div>
          <div className="mt-10">
           <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
onClick={submit}>
         Submit.
          </button>
          <div className='text-sm font-medium text-gray-900 dark:text-white'>
            Go to Menu ? <Link to="/menu" className='text-blue-600 hover:underline'>MENU</Link>
          </div>
          </div>
                 
      </form>
      </div>
  
  
    </section>
    </>
  )
}