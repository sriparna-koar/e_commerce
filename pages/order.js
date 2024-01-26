import React from 'react'
import Image from 'next/image';
const Order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
      <p className="leading-relaxed font-medium   mb-4">Order Successfully Placed!!</p>
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Anonymous Brand</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id:#723018</h1>
        <div className="flex mb-4">
          <a className="flex-grow text-center py-2 text-lg px-1">Description</a>
          <a className="flex-grow text-center border-gray-300 py-2 text-lg px-1">Color</a>
          <a className="flex-grow text-center border-gray-300 py-2 text-lg px-1">Amount</a>
          <a className="flex-grow text-center border-gray-300 py-2 text-lg px-1">Quantity</a>
        </div>

        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">High Star Women Jacket (Medium)</span>
          <span className="ml-auto text-gray-900">Blue</span>
          <span className="ml-auto text-gray-900">₹4988</span>
          <span className="ml-auto text-gray-900">1</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">High Star Women Jacket (Small)</span>
          <span className="ml-auto text-gray-900">Black</span>
          <span className="ml-auto text-gray-900">₹4988</span>
          <span className="ml-auto text-gray-900">2</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">High Star Women Jacket (Large)</span>
          <span className="ml-auto text-gray-900">Red</span>
          <span className="ml-auto text-gray-900">₹4978</span>
          <span className="ml-auto text-gray-900">1</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">Subtotal: ₹5899.00</span>
          <div className="my-9">
          <button className="flex ml-auto mx-0 text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Order Status</button>
          </div>
        </div>
      </div>
      <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Order
