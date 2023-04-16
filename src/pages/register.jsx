
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { Label } from 'flowbite-react';
import { Checkbox } from 'flowbite-react';
import React, {useState} from 'react';
import axios from "axios"

export default function Register(){
  const history=useNavigate();

  const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [conformPassword, setConformPassword] = useState('')
   const [name, setName] = useState('')
   async function submit(e){
    e.preventDefault();

    try{
        await axios.post("http://localhost:5000/register",{
          email,password,conformPassword,name
        })
        .then(res=>{
          if(res.data=="exist"){
            alert("user already exist")
             
          }
         else if(res.data=="not exist"){
           history("/login",{state:{id:email}})
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
      <section class="bg-gradient-to-r from-cyan-100 to-blue-50 dark:bg-gray-900">
      
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Register Here</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Register Here to Order Food.</p>
        <form onSubmit="" className="space-y-8" >
        <div>
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                <input type="text" name='name'onChange={(e)=> {setName(e.target.value)}} id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name" required/>
            </div>
            <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                <input type="email" name='email' onChange={(e)=> {setEmail(e.target.value)}} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
            </div>
            <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                <input type="password" name='password' onChange={(e)=> {setPassword(e.target.value)}} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="password" required/>     
                     </div>
            
                     <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                <input type="password" name='conformPassword' onChange={(e)=> {setConformPassword(e.target.value)}} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="conform password" required/>     
                     </div>
            
  
               
         
            
           
            <div className="flex items-center gap-2">
    <Checkbox id="remember" />
    <Label htmlFor="remember">
      Remember me
    </Label>
  </div>

            <div className="mt-10">
             <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
              onClick={submit}> submit
            </button>

          <div className='text-sm font-medium text-gray-900 dark:text-white'>
            Go to login ? <Link to="/login" className='text-blue-600 hover:underline'>Login Now</Link>
          </div>

           
          </div>
        </form>
        </div>
     </section>
      </>
    )
  }
  


  //  onClick={()=>{Navigate('/home')}}   register button onclick function