"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Footer from '../components/Footer';
interface Product {
  id: number;
  title: string;
  category: string;
  brand: string;
  price: number;
  thumbnail: string;
}
const Product = () => {

  const [data, setData] = useState<{ products: Product[] } | null>(null);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json()) // Convert the response to JSON
      .then(data => {
        console.log(data.products);
        setData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])
  return (
    <React.Fragment>
      <h1 className='mt-8 text-4xl text-center mb-5 font-bold'>Product</h1>
      <div className='flex justify-center gap-5 flex-wrap mb-10'>
        {data ? data.products.map(item => (
          <div key={item.id} className="w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[25.3rem]">
            <span className=''>
              <Image
                className="rounded-t-lg w-[12rem] h-[12rem] mt-2 mx-auto object-contain"
                src={item.thumbnail}
                alt={item.title}
                width={300}
                height={300}
              />
            </span>
            <div className="p-5">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.category}
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.title}
              </p>
              <p className='font-semibold mb-4'>Price: {item.price}</p>

              <Link href={`product/${item.id}`}><span
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              // onClick={() => sandcard(item.id)}
              >More Details<svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </span></Link>
            </div>
          </div>
        )) : <span className="loading loading-spinner text-info w-28 mt-52"></span>}
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Product


// server side randring

// import Link from 'next/link';
// import React from 'react'

// interface Users {
//     name: string;
//     username: string;
//     id: number
// }

// const Product = async () => {
//     const data = await fetch('https://jsonplaceholder.typicode.com/users')
//     const response = await data.json()
//     console.log(response)
//   return (
//     <>
//     <div>Product</div>
//     <div className='flex justify-center gap-5 flex-wrap'>
//     {response.map((item: Users)=>{
//         return <div className='p-5 border border-red-500 rounded'>
//             <h1 key={item.id}>{item.name} {item.username}</h1>
//             <button className='btn btn-primary btn-xs'><Link href={`product/${item.id}`}>single user</Link></button>
//         </div>
//     })}
//     </div>
//     </>
//   )
// }

// export default Product