import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Head from "next/head";
import Script from "next/script";
import { BsFillBagCheckFill } from "react-icons/bs";
import Link from "next/link";
const Checkout = ({ cart, subtotal, addTocart, removeFromcart }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [pincode, setpincode] = useState("");
  const [address, setaddress] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [disabled, setdisabled] = useState(true);
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "pincode") {
      setpincode(e.target.value);
    }
    else if (e.target.name == "address") {
      setaddress(e.target.value);
    }
    else if (e.target.name == "state") {
      setstate(e.target.value);
    }
    else if (e.target.name == "city") {
      setcity(e.target.value);
    }
  //   setTimeout(()=>{

   
  //   if(name.length>3 && email.length>3 && phone.length>3 && pincode.length>3 && address.length>3 && state.length.length> 3 && city.length.length> 3 ){
  //     setdisabled(false)
  //   }
  //   else{
  //     setdisabled(true)
  //   }
  // });
  setTimeout(() => {
    if (
      name.length > 3 &&
      email.length > 3 &&
      phone.length > 3 &&
      pincode.length > 3 &&
      address.length > 3 &&
      state.length > 3 &&  // Fix: Remove extra "length" here
      city.length > 3     // Fix: Remove extra "length" here
    ) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  }, 0);
  };
  // const initiatePayment= async()=>{
  //   let oid=Math.floor(Math.random() * Date.now());
  //   const data={cart,subtotal,oid,email:'email'};
  //   let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`,{
  //     method: "POST",
  //     headers: {
  //       "Content-Type": 'application/json',
  //         },
  //         body: JSON.stringify(data),
  //       })
  //       let txnToken= await a.json()
  //       console.log(txnToken)

  //   var config={
  //     "root":"",
  //     "flow":"DEFAULT",
  //     "data":{
  //       "orderId":oid,
  //       "token":txnToken,
  //       "tokenType":"TXN_TOKEN",
  //       "amount":subtotal
  //     },
  //     "handler":{
  //       "notifyMerchant":function(eventName,data){
  //         console.log("notifyMerchant handler function called");
  //         console.log("eventName=>",eventName);
  //         console.log("data=>",data);
  //       }
  //     }
  //   };
  //   window.Paytm.CheckoutJS.init(config).then(function onSuccess(){
  //     window.Paytm.CheckoutJS.invoke();

  //   }).catch(function onError(error){
  //     console.log("error=>",error);
  //   });
  // }
  // <Script
  //       type="application/javascript"
  //       crossorigin="anonymous"
  //       src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`} onload="onScriptLoad();"

  //     />
  const initiatePayment = async () => {
    try {
      // Generate a random orderId
      let orderId = Math.floor(Math.random() * Date.now());

      // Prepare data for the API request
      const data = {
        cart,
        subtotal,
        orderId,
        email: email,
        name,
       address,
        pincode,
        phone
      };

      // Make a POST request to your API to get the transaction token
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      // Parse the response to get the transaction token
      let { txnToken } = await response.json();
      // console.log(txnToken);

      // Configure Paytm CheckoutJS
      var config = {
        root: "",
        flow: "DEFAULT",
        data: {
          orderId: orderId,
          token: txnToken,
          tokenType: "TXN_TOKEN",
          amount: subtotal,
        },
        handler: {
          notifyMerchant: function (eventName, data) {
            console.log("notifyMerchant handler function called");
            console.log("eventName =>", eventName);
            console.log("data =>", data);
          },
        },
      };

      // Initialize Paytm CheckoutJS and initiate the payment
      window.Paytm.CheckoutJS.init(config)
        .then(function onSuccess() {
          window.Paytm.CheckoutJS.invoke();
        })
        .catch(function onError(error) {
          // console.log('error =>', error);
        });
    } catch (error) {
      // console.error('An error occurred:', error);
    }
  };

  return (
    <div className="container mx-2 sm:m-auto">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Script
        type="application/javascript"
        crossorigin="anonymous"
        src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`}
        onload="onScriptLoad();"
      />
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className="font-semibold text-xl">1. Delivery Details</h2>
      <div className="mx-auto flex my-3">
        <div className="px-2 w-1/2 ">
          <div className=" mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input onChange={handleChange} value={name}
              type="name"
              id="name"
              name="name"
              className="w-full bg-white rounded border  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-6 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input onChange={handleChange} value={email}
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-6 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div className="px-2 w-full">
        <div className=" mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>

          <textarea onChange={handleChange} value={address}
            name="address"
            id="address"
            cols="20"
            rows="2"
            className="w-full bg-white rounded border  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-6 leading-8 transition-colors duration-200 ease-in-out "
          ></textarea>
          <div className="mx-auto flex my-3">
            <div className="px-2 w-1/2">
              <div className=" mb-4">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-600"
                >
                  Phone
                </label>
                <input onChange={handleChange} value={phone}
                  type="phone"
                  id="phone"
                  name="phone"
                  className="w-full bg-white rounded border  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-6 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className=" mb-4">
                <label
                  htmlFor="state"
                  className="leading-7 text-sm text-gray-600"
                >
                  State
                </label>
                <input value={state} 
                  type="text"
                  id="state"
                  name="state"
                  className="w-full bg-white rounded border  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-6 leading-8 transition-colors duration-200 ease-in-out" 
                  readOnly={true}
                />
              </div>
            </div>
          </div>
          <div className="mx-auto flex my-3">
            <div className="px-2 w-1/2">
              <div className=" mb-4">
                <label
                  htmlFor="city"
                  className="leading-7 text-sm text-gray-600"
                >
                  City
                </label>
                <input value={city} 
                  type="text"
                  id="city"
                  name="city"
                  className="w-full bg-white rounded border  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-6 leading-8 transition-colors duration-200 ease-in-out" 
                  readOnly={true}
                />
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className=" mb-4">
                <label
                  htmlFor="pincode"
                  className="leading-7 text-sm text-gray-600"
                >
                  Pincode
                </label>
                <input onChange={ handleChange} value={pincode}
                  type="text"
                  id="pincode"
                  name="pincode"
                  className="w-full bg-white rounded border  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-6 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="font-semibold text-xl">2. View Cart Items</h2>
      <div className="sideCart  bg-yellow-100 p-8 py-4 m-2 ">
        <h2 className="font-bold text-xl text-center ">Cart</h2>

        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-normal">
              {" "}
              No items in the cart.Please add{" "}
            </div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="font-semibold">{cart[k].name}</div>
                  <div className="flex font-semiboldflex items-center justify-center w-1/3 text-lg">
                    <AiOutlineMinusCircle
                      onClick={() => {
                        removeFromcart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-yellow-600"
                    />{" "}
                    <span className="mx-2 text-sm"> {cart[k].qty}</span>
                    <AiOutlinePlusCircle
                      onClick={() => {
                        addTocart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-pink"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <span className="font-bold">Total:₹{subtotal}</span>
      </div>
      <div className="mx-4">
        <Link href={"/checkout"} passHref>
          <button
            disabled={disabled}
            onClick={initiatePayment}
            className="disabled:bg-yellow-200 flex mr-2 text-black bg-yellow-500 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-300 rounded text-lg"
          >
            <BsFillBagCheckFill className="m-1" />
            Pay ₹{subtotal}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
