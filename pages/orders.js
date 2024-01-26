import React, { useEffect } from 'react';
import order from "../models/order";
import mongoose from "mongoose";
import { useRouter } from 'next/router';
const Orders = () => {
  const router = useRouter()

  useEffect(() => {
    if (! localStorage.getItem('token')) {
      router.push('/');
    }
  }, []);
  return (
    
    <div>
      <div className="container mx-auto">
        <div className="relative overflow-x-auto">
          <h1 className="font-bold text-xl p-8">My Orders</h1>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-sms text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Serial No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b text-sm text-gray-700 uppercase ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-faa307-900 whitespace-nowrap "
                >
                  1
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-faa307-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="bg-white border-b text-sm text-gray-700 uppercase">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-faa307-900 whitespace-nowrap "
                >
                  2
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-faa307-900 "
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
              </tr>
              <tr className="bg-white border-b text-sm text-gray-700 uppercase">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-faa307-900 whitespace-nowrap "
                >
                  3
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-faa307-900 "
                >
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4">Accessories</td>
                <td className="px-6 py-4">$99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps({ context }) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let orders = await order.find({  });


  let colorsizeslug = {};
  
  return {
   props:{orders:orders}
  };
}
export default Orders;
