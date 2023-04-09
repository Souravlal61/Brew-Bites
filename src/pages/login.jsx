
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { Label } from 'flowbite-react';
import { Checkbox } from 'flowbite-react';
export default function Login(){
 const navigate = useNavigate();

 const handleSubmit = event => {
   event.preventDefault();

    //👇️ redirect to /contacts
     navigate('/home');
 };
    return(
      <>
      <section class="bg-cyan-200 dark:bg-gray-900">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"> Login Form</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Fill Your Details To Order Food</p>
        <form onSubmit={handleSubmit} class="space-y-8" >
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
            </div>
            <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Passward</label>
                <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="your name" required/>          </div>
            
  
             
               
            
           
            <div className="flex items-center gap-2">
    <Checkbox id="remember" />
    <Label htmlFor="remember">
      Remember me
    </Label>
  </div>

            <div className="mt-10">
             <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
           Submit.
            </button>

          <div className='text-sm font-medium text-gray-900 dark:text-white'>
            Not Register Yet ? <a className='text-blue-600 hover:underline' href='/register'>Create Account</a>
          </div>

            </div>
                   
        </form>
        </div>

       <div className=''>
        <section class="dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">100+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">Outlets</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">40+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">Cities</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">10,00000+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">Orders</dd>
          </div>
      </dl>
  </div>
</section>
    </div>
    
      </section>
      </>
    )
  }