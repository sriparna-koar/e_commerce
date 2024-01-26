import React from "react";
import Link from "next/link";
import product from "../models/product";
import mongoose from "mongoose";

const Tshirt = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-2 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {products.map((item) => {
              return (
            
                  <Link passHref={true} key={item._id} href={`/product/${item.slug}`}>
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
                      <a className="block relative  rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="m-auto  h-[30vh] md:h-[16vh] block"
                          src={item.img}
                        />
                      </a>
                      <div className="mt-4 text-center">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          CATEGORY: {item.category}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium md:text-center">
                         {item.title}
                        </h2>
                        <h3 className="text-gray-900 title-font text-lg font-medium md:text-center">BRAND:
                         {item.desc}
                        </h3>
                        <p className="mt-1"> ₹ {item.price}</p>
                      </div>
                    </div>
                  </Link>
            
              );
            })}
            {/* <Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
<a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto  h-[30vh] md:h-[16vh] block" src="https://m.media-amazon.com/imgs/I/61rZrS+YbaL._SX679_.jpg"/>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium md:text-left">SKMEI Men's Digital Sports Watch, LED Square Large Face Analog Quartz Wrist Watch with Multi-Time Zone Waterproof Stopwatch</h2>
          <p className="mt-1"> ₹899</p>
        </div>
      </div>
      </Link>
      <Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto  h-[30vh] md:h-[16vh] block" src="https://m.media-amazon.com/imgs/I/41wiYF9N1gL._SX300_SY300_QL70_FMwebp_.jpg"/>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium md:text-left">Noise Newly Launched Quad Call 1.81" Display, Bluetooth Calling Smart Watch, AI Voice Assistance, 160+Hrs Battery Life, Metallic Build, in-Built Games, 100 Sports Modes, 100+ Watch Faces (Jet Black)</h2>
          <p className="mt-1">₹1,299</p>
        </div>
      </div>
      </Link>
      <Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto  h-[30vh] md:h-[16vh] block" src="https://m.media-amazon.com/imgs/I/71zXL4hqUyL._SX679_.jpg"/>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium md:text-left">SKMEI Men Watch Dual-Display Electronic Watch with Luminous 50m Waterproof Watch Fashion Multifunctional Sports Watch for Men- 1816</h2>
          <p className="mt-1"> ₹1,979</p>
        </div>
      </div>
      </Link>
      <Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto  h-[30vh] md:h-[16vh] block" src="https://m.media-amazon.com/imgs/I/71xQq6cAhGL._SY879_.jpg"/>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium md:text-left">Titan Neo Iv Analog Black Dial Men's Watch-NL1805NM01/NP1805NM01</h2>
          <p className="mt-1">₹6,156</p>
        </div>
      </div>
      </Link>
      <Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto  h-[30vh] md:h-[16vh] block" src="https://m.media-amazon.com/imgs/I/719wzn0TOlL._SY879_.jpg"/>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium md:text-left">Titan Anthracite Dial Analog Watch For Men -NR1733KM01</h2>
          <p className="mt-1">₹4,995</p>
        </div>
      </div>
      </Link>
  
      <Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto  h-[30vh] md:h-[16vh] block" src="https://m.media-amazon.com/imgs/I/61NL684XQcL._SX679_.jpg"/>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium md:text-left">NAVIFORCE Men's Military Digital Watches Analog Quartz Waterproof Watch Sport Multifunctional Leather Wristwatch</h2>
          <p className="mt-1"> ₹2,799</p>
        </div>
      </div>
</Link>
<Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto  h-[30vh] md:h-[16vh] block" src="https://m.media-amazon.com/imgs/I/71GKSim4XrL._AC_UL480_FMwebp_QL65_.jpg"/>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium md:text-left">Fire-Boltt Solace Luxury Stainless Steel Smart Watch, 1.32" (33.5mm) Display 360 * 360 px high Resolution with 60Hz Refresh Rate, Bluetooth Calling & 360 Health Monitoring (Silver)</h2>
          <p className="mt-1">₹1,499</p>
        </div>
      </div>
    </Link>
    <Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto  h-[30vh] md:h-[16vh] block" src="https://m.media-amazon.com/imgs/I/51JvQkZW5ML._SX679_.jpg"/>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium md:text-left">Sylvi Imperial Casual Fashion Premium Water-Resistant Watch for Men with Date Display</h2>
          <p className="mt-1">₹1,497</p>
        </div>
      </div>
    </Link>
    <Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto  h-[30vh] md:h-[16vh] block" src="https://m.media-amazon.com/imgs/I/41ySRhErmUL._SX300_SY300_QL70_FMwebp_.jpg"/>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium md:text-left">Fire-Boltt Newly Launched Ninja Call Pro Max 2.01” Display Smart Watch, Bluetooth Calling, 120+ Sports Modes, Health Suite, Voice Assistance</h2>
          <p className="mt-1">₹1,499</p>
        </div>
      </div>
    </Link>
    <Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto  h-[30vh] md:h-[16vh] block" src="https://m.media-amazon.com/imgs/I/51w6VCsZ6GL._SX300_SY300_QL70_FMwebp_.jpg"/>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium md:text-left">Fire-Boltt Phoenix Ultra Luxury Stainless Steel, Bluetooth Calling Smartwatch, AI Voice Assistant, Metal Body with 120+ Sports Modes, SpO2, Heart Rate Monitoring (Gold)</h2>
          <p className="mt-1">₹1,999</p>
        </div>
      </div>
    </Link>
    <Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto  h-[30vh] md:h-[16vh] block" src="https://m.media-amazon.com/imgs/I/71AxLdT5lJL._SY450_.jpg"/>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium md:text-left">Fire-Boltt Asteroid 1.43” Super AMOLED Display Smart Watch, One Tap Bluetooth Calling, 466 * 466 px Resolution, 123 Sports Modes, in-Built Voice Assistance, 350mAh Large Battery (Black)</h2>
          <p className="mt-1">₹1,799</p>
        </div>
      </div>
    </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
};
export async function getServerSideProps({ context }) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let products = await product.find({category:'watch'});

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}
export default Tshirt;
