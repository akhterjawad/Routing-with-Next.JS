'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';


const SingleUser = () => {
    const [data, setData] = useState<any>(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/product/${id}`)
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                setData(res)
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <React.Fragment>
            {data ? (
                <div className="container mx-auto px-4 py-14">
                    <section className="text-gray-600 body-font overflow-hidden">
                        <div className="lg:w-4/5 w-full bg-white mx-auto flex flex-col lg:flex-row shadow-lg rounded-lg border border-gray-200">
                            {/* Right Section - Image */}
                            <div className='lg:w-1/2 w-full flex items-center justify-center p-6'>
                                <Image
                                    alt="ecommerce"
                                    className="object-contain rounded-lg shadow-lg lg:h-auto h-64"
                                    src={data.thumbnail}
                                    width={460} // Adjust to the desired width
                                    height={460} // Adjust to the desired height
                                />
                            </div>
                            {/* Left Section */}
                            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 p-6">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                    {data.category}
                                </h2>
                                <h1 className="text-gray-900 text-2xl lg:text-3xl title-font font-medium mb-4">
                                    {data.title}
                                </h1>
                                <p className="leading-relaxed mb-4">{data.description}</p>
                                <div className="flex mb-4">
                                    <span className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                                        Description
                                    </span>
                                    <span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                                        Reviews
                                    </span>
                                    <span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                                        Details
                                    </span>
                                </div>
                                <div className="flex border-t border-gray-200 py-2">
                                    <span className="text-gray-500">Rating</span>
                                    <span className="ml-auto text-gray-900">{data.rating}</span>
                                </div>
                                <div className="flex border-t border-gray-200 py-2">
                                    <span className="text-gray-500">Weight</span>
                                    <span className="ml-auto text-gray-900">{data.weight}</span>
                                </div>
                                <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                    <span className="text-gray-500">Quantity</span>
                                    <span className="ml-auto text-gray-900">1</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="title-font font-medium text-xl lg:text-2xl text-gray-900">
                                        ${data.price}
                                    </span>
                                    <button className="flex ml-auto text-white bg-indigo-600 border-0 py-2 px-4 lg:px-6 focus:outline-none hover:bg-indigo-700 rounded shadow">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            ) : (
                <div className='flex items-center justify-center'>
                    <div className="loading text-center loading-spinner text-info w-28 mt-52"></div>
                </div>
            )}
        </React.Fragment>
    )
}

export default SingleUser;
