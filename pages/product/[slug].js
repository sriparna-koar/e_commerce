import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import product from "../../models/product";
import mongoose from "mongoose";
const Page = ({ buyNow, addTocart, products, variants }) => {
  console.log(products, variants);
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setpin] = useState();
  const [service, setservice] = useState();

  const checkserviceability = async () => {
     
    let pins = await fetch(`${process.env.HOST}/api/pincode`);
    let pinJson = await pins.json();
    if (pinJson.includes(parseInt(pin))) {
      setservice(true);
      toast(' Pincode Available!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      
        });
    } else {
      setservice(false);
      toast.error('Sorry, Pincode Not Available!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
    }
  };
  const onchangepin = (e) => {
    setpin(e.target.value);
  };
  const [color, setcolor] = useState(products.color);
  const [size, setsize] = useState(products.size);

  const refreshVariant = (newSize, newColor) => {
    console.log(
      "Refreshing variant with size:",
      newSize,
      "and color:",
      newColor
    );

    if (variants[newSize] && variants[newSize][newColor]) {
      const url = `${process.env.NEXT_PUBLIC_HOST}/product/${variants[newSize][newColor].slug}`;
      window.location.href = url;
    } else {
      console.error(
        `Variant not found for size: ${newSize}, color: ${newColor}`
      );
    }
  };

  const handleSizeChange = (e) => {
    const newSize = e.target.value;

    setsize(newSize);
    refreshVariant(newSize, color);

    if (!selectedSizes.includes(newSize)) {
      setSelectedSizes([...selectedSizes, newSize]);
    }
  };

  const handleColorChange = (newColor) => {
    setcolor(newColor);
    refreshVariant(size, newColor);
  };

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <ToastContainer
          position="top-right"
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

    
        <div className="container px-5 py-14 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto px-24 h-21 object-cover object-center rounded"
              src={products.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Anonymous Brand
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {products.title} Size:{products.size} Color:{products.color}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center"></span>
              </div>
              <p className="leading-relaxed">
                {products.desc}, {products.title}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color Available: </span>

                  {variants.colors.map((color) => (
                    <button
                      key={color}
                      className={`border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none ${
                        color === "White" ? "bg-white" : ""
                      } ${color === "Red" ? "bg-red-700" : ""} 
    ${color === "Blue" ? "bg-blue-700" : ""} 
    ${color === "Black" ? "bg-black-700" : ""} ${
                        color === "Gray" ? "bg-gray-700" : ""
                      } ${color === "Gold" ? "bg-gold-700" : ""} 
    ${color === "Green" ? "bg-green-700" : ""} ${
                        color === "Yellow" ? "bg-yellow-700" : ""
                      }`}
                      onClick={() => {
                        if (
                          color === "Red" &&
                          variants["Red"] &&
                          variants["Red"].includes(size)
                        ) {
                          refreshVariant(size, "Red");
                        } else {
                          handleColorChange(color);
                        }
                      }}
                    ></button>
                  ))}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <button
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-base pl-3 pr-10"
                      onClick={() =>
                        document.getElementById("sizeDropdown").click()
                      }
                    >
                      {size || "Select Size"}
                    </button>
                    <select
                      id="sizeDropdown"
                      value={size}
                      onChange={(e) => {
                        refreshVariant(e.target.value, color);
                      }}
                      className="absolute inset-0 opacity-0 w-full"
                    >
                      <option value="" disabled>
                        Select Size
                      </option>
                      {variants.sizes.map((sizeOption) => (
                        <option
                          key={sizeOption}
                          value={sizeOption}
                          disabled={
                            !variants.colors.every(
                              (color) =>
                                variants[color] && variants[color][sizeOption]
                            )
                          }
                        >
                          {sizeOption}
                        </option>
                      ))}
                    </select>

               
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹{products.price}
                </span>
                <button
                  onClick={() => {
                    addTocart(
                      slug,
                      1,
                      products.price,
                      products.title,
                      size,
                      color
                    );
                  }}
                  className="flex ml-8 text-white bg-yellow-500 border-0 py-2 md:px-6 focus:outline-none hover:bg-yellow-600 rounded"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    buyNow(
                      slug,
                      1,
                      products.price,
                      products.title,
                      size,
                      color
                    );
                  }}
                  className="flex ml-4 text-white bg-yellow-500 border-0 py-2 md:px-6 focus:outline-none hover:bg-yellow-600 rounded"
                >
                  Buy Now
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  {/* <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5s.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg> */}
                </button>
              </div>
              <div className="pin mt-6 flex space-x-2 text-sm ">
                <input
                  onChange={onchangepin}
                  className="px-2 border-2 border-black-300 rounded-md"
                  placeholder="Enter your pincode"
                  type="text"
                />
                <button
                  onClick={checkserviceability}
                  className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
                >
                  Check
                </button>
              </div>
              {!service && service != null && (
                <div className="text-red-900 text-sm mt-3">
                  Sorry,Pincode not available
                </div>
              )}
              {service && service != null && (
                <div className="text-green-900 text-sm mt-3">
                  Pincode available
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps({ params }) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let productData = await product.findOne({ slug: params.slug });
  let variantsData = await product.find({ title: productData.title });

  let variants = {};
  variantsData.forEach((variant) => {

    const sizes = variant.size.split(",");
    const colors = variant.color.split(",");

   
    sizes.forEach((size) => {

      if (!variants[size]) {
        variants[size] = {};
      }

     
      colors.forEach((color) => {

        if (!variants[size][color]) {
          variants[size][color] = {
            slug: variant.slug,
          };
        }
      });
    });
  });


  const sizesArray = Object.keys(variants);
  const colorsArray = Array.from(
    new Set(variantsData.map((variant) => variant.color.split(",")).flat())
  );

  return {
    props: {
      products: JSON.parse(JSON.stringify(productData)),
      variants: { sizes: sizesArray, colors: colorsArray, variants: variants },
    },
  };
}

export default Page;
