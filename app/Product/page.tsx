"use client"
import Link from 'next/link';
import React, { useState } from 'react'

interface Users {
  name: string;
  username: string;
  id: number
}

const Product = () => {
  const [data, setData] = useState<{ products: Product[] } | null>(null);
  function maindata() {
    fetch('https://dummyjson.com/products')
      .then(response => response.json()) // Convert the response to JSON
      .then(data => {
        console.log(data.products);
        setData(data); 
      })
      .catch(err => {
        console.log(err);
      });
  }
  maindata()
  return (
    <>
      <div>Product</div>
      <div className='flex justify-center gap-5 flex-wrap'>
        {data ? data.products.map((item) => (
          <div className='p-5 border border-red-500 rounded' key={item.id}>
            <h1>{item.title}</h1>
            <button className='btn btn-primary btn-xs'>
              <Link href={`product/${item.id}`}>single product</Link>
            </button>
          </div>
        )) : <div>Loading...</div>}
      </div>
    </>
  )
}

export default Product


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