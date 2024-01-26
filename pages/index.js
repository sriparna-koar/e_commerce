import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
      <title>Anonymous Brand- brandanym.com</title>
        <meta name="description" content="chanelany.com Anonymous Brand" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <div>
        <img src="/home.jpg" alt="" className="w-full h-auto"/>
      </div>
  
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Wardrobe Details</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Your choice is out first priority.We serve u bet of all times.Feel free to choose any of your choices</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="inline-flex items-center   bg-indigo-100 mb-4">
       
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="inline-flex items-center   bg-indigo-100 mb-4">
       
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="inline-flex items-center   bg-indigo-100  mb-4">
       
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="inline-flex items-center   bg-indigo-100 500 mb-4">
       
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
       
      </div>
  
    </div>
    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>


    </div>
  )
}
