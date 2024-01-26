import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
 
} from "react-icons/ai";
import {  MdAccountCircle } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";
import user from "../models/user";
const Navbar = ({user,logout,cart,addTocart,removeFromcart,clearcart,subtotal}) => {
  const [dropdown, setdropdown] = useState(false);
 
  const ref = useRef();
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
      setCartOpen(false); 
    } else {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
      setCartOpen(true); 
    }
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-startjustify-between items-center py-2 shadow-md sticky top-0 z-10 bg-white">
      <div className="logo mr-auto md:mx-5">
        <Link href={"/"}>
          <a>
            <Image height={40} width={100} src="/logo3r.jpg" alt="" />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-md">
          <li className="hover:text-yellow-600">
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li className="hover:text-yellow-600">
            <Link href={"/phone"}>
              <a>Phones</a>
            </Link>
          </li>
          <li className="hover:text-yellow-600">
            <Link href={"/jacket"}>
              <a>Jackets</a>
            </Link>
          </li>
          <li className="hover:text-yellow-600">
            <Link href={"/watch"}>
              <a>Watches</a>
            </Link>
          </li>
          <li className="hover:text-yellow-600">
            <Link href={"/mugs"}>
              <a>Mugs</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="cursor-pointer items-center absolute right-0 top-4 mx-5 flex">
        <span onMouseOver={()=>{setdropdown(true)}} onMouseLeave={()=>{setdropdown(false)}} >
     {dropdown && <div onMouseOver={()=>{setdropdown(true)}} onMouseLeave={()=>{setdropdown(false)}} 
     className="absolute right-8 rounded-md top-6 py-4 bg-yellow-300 px-5 w-32">
        <ul>
       <Link href={'/myaccount'}><a><li className="py-1 hover:text-yellow-600 text-sm font-bold">My Account</li></a></Link>
       <Link href={'/orders'}><a><li className="py-1 hover:text-yellow-600 text-sm font-bold">Orders</li></a></Link>
     <li onClick={logout} className="py-1 hover:text-yellow-600 text-sm font-bold">Logout</li>
        </ul>
      </div>}
      {user.value && <MdAccountCircle className="text-xl md:text-3xl"/>}
      </span>
  {!user.value && <Link href={'/login'}><a>
<button className="bg-yellow-600 px-2 py-1 rounded-md text-sm text-white mx-2">Login</button>
    </a>
  </Link>}
      <button>
          <AiOutlineShoppingCart onClick={toggleCart} className="text-xl md:text-3xl" />
        </button>
</div>

    
      
    
      <div  ref={ref}
        className={`w-72 h-[100vh]  overflow-y-scroll sideCart absolute top-0 right-0 bg-yellow-100 px-8 py-16 transform transition-transform ${Object.keys(cart).length==0? 'translate-x-0':'translate-x-full'} `} >
      
          <h2 className="font-bold text-xl text-center ">Cart</h2>
          <span
        onClick={toggleCart}
        className="absolute top-5 right-2 cursor-pointer text-2xl text-yellow-600"
      >
        <AiFillCloseCircle />

      </span>
      <ol className="list-decimal font-semibold">
        {Object.keys(cart).length ==0 && 
        <div className="my-4 font-normal"> No items in the cart.Please add </div> }
          {Object.keys(cart).map((k)=>{return <li key={k}>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">{cart[k].name}</div>
              <div className="flex font-semiboldflex items-center justify-center w-1/3 text-lg">
                <AiOutlineMinusCircle onClick={()=>{removeFromcart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}className="cursor-pointer text-yellow-600" /> <span className='mx-2 text-sm'> {cart[k].qty}</span>
                <AiOutlinePlusCircle onClick={()=>{addTocart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className="cursor-pointer text-pink" />
              
              </div>
            </div>
          </li>})}
        </ol>
        <div className="font-bold my-2">Total:{subtotal}</div>
        <div className="flex">
        <Link href={'/checkout'}>
  
    <button className="flex mx-auto mr-2 text-black bg-yellow-500 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-300 rounded text-lg">
      <BsFillBagCheckFill className="m-1" /> Checkout Items
    </button>

</Link>

          <button onClick={clearcart} className="flex mx-auto  text-black bg-yellow-500 mr-2 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-300 rounded text-lg ">
            {" "}
            Clear Cart
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default Navbar;
