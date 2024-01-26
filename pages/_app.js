// import "../styles/globals.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import LoadingBar from 'react-top-loading-bar'
// function MyApp({ Component, pageProps }) {
//   const [cart, setcart]=useState({})
//   const [subtotal, setsubtotal]=useState(0)
//   const [user, setuser]=useState({value:null})
//   const [key, setkey]=useState(0)
//   const [progress, setProgress] = useState(0)
//   const router=useRouter()


//   useEffect(()=>{
//     router.events.on('routeChangeStart',()=>{
//       setProgress(40)
//     })
//     router.events.on('routeChangeComplete',()=>{
//       setProgress(100)
//     })
   
//       try{
//         if(localStorage.getItem("cart")){
//           setcart(JSON.parse(localStorage.getItem("cart")))
//           savecart(JSON.parse(localStorage.getItem("cart")))
//         }
        
//       }
//       catch(error){
//         console.error(error)
//         localStorage.clear()
//       }
//     const token=localStorage.getItem('token')
//     if(token){
//       setuser({value:token})
//       setkey(Math.random())
//     }
  
//   },[router.query])
//   const logout=()=>{
//     localStorage.removeItem("token")
//     setuser({value:null})
//     setkey(Math.random())
//     router.push('/')
//   }
//   const savecart=(mycart)=>{
//     localStorage.setItem("cart",JSON.stringify(mycart))
//     let subt=0;
//     let keys=Object.keys(mycart)
//     for(let i=0; i<keys.length;i++){
// subt+=mycart[keys[i]]["price"] * mycart[keys[i]].qty;

//     }
//     setsubtotal(subt)
//   }
//   const addTocart=(itemcode,qty,price,name,size,variant)=>{
//     let newcart=cart;
//     if(itemcode in cart){
//       newcart[itemcode].qty=cart[itemcode].qty+qty
//     }
//     else{
//       newcart[itemcode]={qty:1, price,name,size,variant}
//     }
//     setcart(newcart)
//     savecart(newcart)
//   }
//   const buyNow=(itemcode,qty,price,name,size,variant)=>{
   
//     let newcart={itemcode:{qty:1, price,name,size,variant}};
    
//     setcart(newcart)
//     savecart(newcart)
//     savecart(newcart)
//     router.push('/checkout')
//   }
//   const clearcart=()=>{
//     setcart({})
//     savecart({})
//   }
//   const removeFromcart=(itemcode,qty,price,name,size,variant)=>{
//     let newcart=JSON.parse(JSON.stringify(cart));
//     if(itemcode in cart){
//       newcart[itemcode].qty=cart[itemcode].qty-qty
//     }
//     if(newcart[itemcode]["qty"]<=0){
//       delete newcart[itemcode]
//     }
//     setcart(newcart)
//     savecart(newcart)
//   }
//   return (
//     <>
//      <LoadingBar
//         color='#f11946'
//         progress={progress}
//         waitingTime={400}
//         onLoaderFinished={() => setProgress(0)}
//       />
//      {key && <Navbar logout={logout} user={user} key={key} cart={cart} addTocart={addTocart} removeFromcart={removeFromcart}
//       clearcart={clearcart} subtotal={subtotal} />}
//       <Component buyNow={buyNow} cart={cart} addTocart={addTocart} removeFromcart={removeFromcart}
//       clearcart={clearcart} subtotal={subtotal}  {...pageProps} />
//       <Footer />
//     </>
//   );
// }

// export default MyApp;
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from 'react-top-loading-bar';

function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState({});
  const [subtotal, setsubtotal] = useState(0);
  const [user, setuser] = useState({ value: null });
  const [key, setkey] = useState(0);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setProgress(40);
    };

    const handleRouteChangeComplete = () => {
      setProgress(100);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    try {
      if (localStorage.getItem("cart")) {
        const parsedCart = JSON.parse(localStorage.getItem("cart"));
        setcart(parsedCart);
        savecart(parsedCart);
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }

    const token = localStorage.getItem('token');
    if (token) {
      setuser({ value: token });
      setkey(Math.random());
    }

    // Cleanup event listeners
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events, router.query]); // Include router.events and router.query in the dependency array

  const logout = () => {
    localStorage.removeItem("token");
    setuser({ value: null });
    setkey(Math.random());
    router.push('/');
  };

  const savecart = (mycart) => {
    localStorage.setItem("cart", JSON.stringify(mycart));
    let subt = 0;
    let keys = Object.keys(mycart);
    for (let i = 0; i < keys.length; i++) {
      subt += mycart[keys[i]]["price"] * mycart[keys[i]].qty;
    }
    setsubtotal(subt);
  };

  const addTocart = (itemcode, qty, price, name, size, variant) => {
    let newcart = { ...cart };
    if (itemcode in cart) {
      newcart[itemcode].qty = cart[itemcode].qty + qty;
    } else {
      newcart[itemcode] = { qty: 1, price, name, size, variant };
    }
    setcart(newcart);
    savecart(newcart);
  };

  const buyNow = (itemcode, qty, price, name, size, variant) => {
    let newcart = { [itemcode]: { qty: 1, price, name, size, variant } };
    setcart(newcart);
    savecart(newcart);
    router.push('/checkout');
  };

  const clearcart = () => {
    setcart({});
    savecart({});
  };

  const removeFromcart = (itemcode, qty, price, name, size, variant) => {
    let newcart = { ...cart };
    if (itemcode in cart) {
      newcart[itemcode].qty = cart[itemcode].qty - qty;
    }
    if (newcart[itemcode]?.qty <= 0) {
      delete newcart[itemcode];
    }
    setcart(newcart);
    savecart(newcart);
  };

  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      {key && (
        <Navbar
          logout={logout}
          user={user}
          key={key}
          cart={cart}
          addTocart={addTocart}
          removeFromcart={removeFromcart}
          clearcart={clearcart}
          subtotal={subtotal}
        />
      )}
      <Component
        buyNow={buyNow}
        cart={cart}
        addTocart={addTocart}
        removeFromcart={removeFromcart}
        clearcart={clearcart}
        subtotal={subtotal}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
