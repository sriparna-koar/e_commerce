import React from "react";
import Link from "next/link";
import product from "../models/product";
import mongoose from "mongoose";

const Phone = ({ products }) => {
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

  let products = await product.find({category:'phone'});

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}
export default Phone;
