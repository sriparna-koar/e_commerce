import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
<footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
    <Link href={"/"}>
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       
     
    
      </a>
      </Link>
      <p className="mt-2 text-sm text-gray-500 px-4" >  Annonymous Brand- Ur Choice our priority</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">STORE</h2>
        <nav className="list-none mb-10">
          <li>
        <Link href={'/jacket'}><a className="text-gray-600 hover:text-gray-800">Jackets</a></Link>
          </li>
          <li>
          <Link href={'/watch'}><a className="text-gray-600  hover:text-gray-800">Watches</a></Link>
          </li>
          <li>
          <Link href={'/mugs'}><a className="text-gray-600 hover:text-gray-800">Mugs</a></Link>
          </li>
          <li>
          <Link href={'/phone'}><a className="text-gray-600 hover:text-gray-800">Phones</a></Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ABOUT</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Best Quality Product</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Your Choice Our Priority</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Reasonable Prices</a>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Policy</h2>
        <nav className="list-none mb-10">
          <li>
          <Link href={'/order'}><a className="text-gray-600 hover:text-gray-800">Order Here</a></Link>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800"></a>
          </li>
          {/* <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li> */}
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Payment</h2>
        <nav className="list-none mb-10">
          <li>
          <Link href={'/contact'}><a className="text-gray-600 hover:text-gray-800">Contact Profile Link</a></Link> 
          </li>
          <li>
          <Link href={'/login'}><a className="text-gray-600 hover:text-gray-800">Login Link</a></Link>
          </li>
          
          
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 shata —All Rights Reservevd
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">SriparnaKoar</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">

            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
   
        </a>
        <a className="ml-3 text-gray-500">

            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
   
        </a>
        <a className="ml-3 text-gray-500">

            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>

        </a>
        <a className="ml-3 text-gray-500">

            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
    
        </a>
      </span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
