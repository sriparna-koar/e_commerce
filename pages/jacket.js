import React from 'react'
import Link from 'next/link'
import product from "../models/product";
import mongoose from "mongoose";
import Image from 'next/image';
const Jacket = ({ products }) => {
  return (
    <div>
       <section className="text-gray-600 body-font">
  <div className="container px-2 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
   {Object.keys(products).map((item) => {
    return (
      <Link passHref={true} key={products[item]._id} href={`/product/${products[item].slug}`}>
        <div className="lg:w-2/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
      <a className="block relative  rounded overflow-hidden">
        <Image alt="ecommerce" className="m-auto  h-[30vh] md:h-[16vh] block"  src={products[item].img}/>
      </a>
      <div className="mt-4 text-center">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Brand:  {products[item].desc}</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium md:text-center"> {products[item].title}</h2>

        <p className="mt-2"> Color Available: {products[item].color}</p>
        <p className="mt-1"> ₹ {products[item].price}</p>
        <div className="mt-1">
  {products[item].size.includes('S') && <span className='border-gray-600 px-1 mx-1'>S</span>}
  {products[item].size.includes('L') && <span className='border-gray-600 px-1 mx-1'>L</span>}
  {products[item].size.includes('M') && <span className='border-gray-600 px-1 mx-1'>M</span>}
  {products[item].size.includes('XL') && <span className='border-gray-600 px-1 mx-1'>XL</span>}
  {products[item].size.includes('XXL') && <span className='border-gray-600 px-1 mx-1'>XXL</span>}
</div>

        <div className="mt-1">
        {products[item].color.includes('Red') && <button className='border-gray-300 ml-1 bg-red-700 rounded-full w-6 focus:outline-none'></button>}
        {products[item].color.includes('Blue') && <button className='border-gray-300 ml-1 bg-red-700 rounded-full w-6 focus:outline-none'></button>}
        {products[item].color.includes('Black') && <button className='border-gray-300 ml-1 bg-red-700 rounded-full w-6 focus:outline-none'></button>}
        {products[item].color.includes('Light Grey') && <button className='border-gray-300 ml-1 bg-red-700 rounded-full w-6 focus:outline-none'></button>}



        </div>
      </div>
    </div>
    </Link>
     );
    })}
    </div>
  </div>
</section>
    </div>
  )
}
export async function getServerSideProps({ context }) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let products = await product.find({ category: 'jacket' });
  let jacket = {};

  for (let item of products) {
    if (item.title in jacket) {
      if (item.availableqty > 0) {
        const colorsArray = item.color.split(',').map(color => color.trim());
        jacket[item.title].color = Array.from(new Set([...jacket[item.title].color, ...colorsArray])).join(', ');
        
        const sizesArray = item.size.split(',').map(size => size.trim());
        jacket[item.title].size = Array.from(new Set([...jacket[item.title].size, ...sizesArray]));
      }
    } else {
      jacket[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableqty > 0) {
        const colorsArray = item.color.split(',').map(color => color.trim());
        jacket[item.title].color = colorsArray.join(', ');

        const sizesArray = item.size.split(',').map(size => size.trim());
        jacket[item.title].size = sizesArray;
      }
    }
  }

  return {
    props: { products: JSON.parse(JSON.stringify(jacket)) },
  };
}

export default Jacket;
