import React from 'react';
import Header from './Header';
import RightFlower from '../../public/Icons/RightFlower';
import LeftFlower from '../../public/Icons/LeftFlower';
import BodyFrame from '../Frame/BodyFrame';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const Collection = () => {
    return (
        <div className="relative">
            <div className="border bg-[#F1F1F1] min-h-screen">
                <Header />
                <div className="mt-20">
                    <BodyFrame>
                        <div className="flex flex-row">
                            <div className="flex flex-col space-y-10 w-[56%] mt-10 mr-12">
                                <div className="text-5xl font-light"><p>Collections</p></div>
                                <div className="text-2xl"><p className="leading-10">you can explore ans shop many different collection from various brands here.</p></div>
                                <div>
                                    <button className="flex flex-row items-center bg-black rounded-sm text-white py-3 
                                        px-5 hover:bg-white hover:text-black hover:transition-all">
                                        <span className="mr-2"><HiOutlineShoppingBag /></span> Shop Now
                                    </button>
                                </div>
                            </div>

                            <div className="">
                                <div className="border-2 border-gray-300 w-80 h-96 relative rounded-tl-[35%] rounded-br-[35%]">
                                    <img 
                                        src={'https://images.unsplash.com/photo-1524386189627-88c26ac1cc69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'} 
                                        className="w-full h-full object-cover rounded-tl-[35%] 
                                            rounded-br-[35%] absolute bottom-4 right-3"
                                        alt="collection"
                                    />
                                </div>
                            </div>
                        </div>
                    </BodyFrame>
                </div>
            </div>

            <div className="absolute left-0 bottom-20">
                <RightFlower className="w-24" />
            </div>
            <div className="absolute right-0 bottom-28">
                <LeftFlower className="w-40" />
            </div>
        </div>
    )
}

export default Collection