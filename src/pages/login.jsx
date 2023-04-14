
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { Label } from 'flowbite-react';
import { Checkbox } from 'flowbite-react';
import React, {useState} from 'react';
import axios from "axios"
export default function Login(){

  let Navigate=useNavigate();
  const [user, setUser] = useState({
  
    email:"",
    password:""
  
  })

  const handleChange = e => {
    const {name,value} = e.target
    setUser({
      ...user,
      [name]: value
    })
   
  }

 const login = () => {
  axios.post("http://localhost:5000/login", user)
  .then(res => alert(res.data.message))
 }
    return(
      <>
      <section class="bg-gradient-to-r from-cyan-200 to-blue-500 dark:bg-gray-900">
        {console.log(user)}
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"> Login Here</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Login Here to Order Food.</p>
        <form onSubmit="" className="space-y-8" >
            <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                <input type="email" name='email' value={user.email} onChange={handleChange} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
            </div>
            <div>
                <label for="Password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                <input type="password" name='password' value={user.password} onChange={handleChange} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="your name" required/>          </div>
            
  
             
               
            
           
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
              onClick={login} >           Submit.
            </button>

          <div className='text-sm font-medium text-gray-900 dark:text-white'>
            Not Register Yet ? <Link to='/register' className='text-blue-600 hover:underline'>Create Account</Link>
          </div>

            </div>
                   
        </form>
        </div>

       <div style={{backgroundImage:"url(../image/back.jpg)"}}>
       <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"><center>Best Services</center></h2>
        <section class="dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">30 Minutes</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">Home Delivery</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">40+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">Cities</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">99%</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">Fresh Food</dd>
          </div>
      </dl>
  </div>
</section>
    </div>
    
      </section>
      </>
    )
  }



  //onClick={()=>{Navigate('/home')}}