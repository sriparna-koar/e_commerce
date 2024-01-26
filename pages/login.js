
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
 const router=useRouter()
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    useEffect(()=>{
        if(localStorage.getItem('token')){
            router.push('/')
        }
    },[router])
    const handleChange=(e)=>{
         if(e.target.name=='email'){
            setemail(e.target.value) 
        }
        else if(e.target.name=='password'){
            setpassword(e.target.value)  
        }    
    }
    const handleSubmit=async(e)=>{
e.preventDefault()

const data={email,password}
let res= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`,{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify(data),
})
let response=await res.json()
console.log(response)

setemail('')
setpassword('')
if(response.success){
    localStorage.setItem('token',response.token)
toast('You are successfully logged in!!', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
 
    });
    setTimeout(()=>{
        router.push(process.env.NEXT_PUBLIC_HOST)
    },2000);
 
    }
    else{
        toast.error(response.error, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
         
            });
    }
}

  return (
    <div>
        <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
      <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://t3.ftcdn.net/jpg/04/43/81/00/240_F_443810023_0AHMCATZoRoTGLgIHPHHun3ofhQPZ19p.jpg" alt="logo"/>
          Anonymous Brand
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign Up
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" method='POST'>
              
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input value={email} onChange={handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input value={password} onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      
                   <Link href={'/forgot'} passHref><a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                   </Link> 
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                 <Link href={'/signup'} passHref><p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
                  </Link> 
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Login
