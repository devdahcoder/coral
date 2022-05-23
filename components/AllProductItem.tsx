import React, { useState } from 'react'
import ImageContainer from './ImageContainer';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';

type Props = {
    item: Record<string, any>;
}

const AllProductItem = ({item}: Props) => {

    const [isLiked, setIsLiked] = useState<boolean>(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
    }

    return (
        <div className="relative group w-full">
            
            <div className="relative">

                

                <div className="">
                    <ImageContainer imageLink={item?.imageLink} className={'h-[340px]'} />
                </div>

                {
                    item?.banner && (
                        <div className={`absolute top-3 text-[0.6rem] px-3 py-1 left-0 text-white flex 
                            flex-row items-center justify-center ${item?.banner?.toLowerCase() === 'hot' ? 'bg-red-500' : 'bg-black' }`}>
                        <p>{item?.banner}</p></div>
                    )
                }

                <div className="bg-primary-100 flex flex-row items-center justify-between 
                    py-3 px-2 absolute invisible bottom-0 left-0 w-full text-white text-sm font-light capitalize
                    group-hover:visible"
                >
                    <div className="">
                        <button onDoubleClick={handleLike} className="bg-none border-none outline-none flex flex-col items-center justify-center">
                            {isLiked ? <BsHeartFill /> : <BsHeart />}
                        </button>
                    </div>
                    
                    <div className="flex flex-row items-center">
                        <span className="mr-2"><HiOutlineShoppingBag /></span> Shop Now
                    </div>
                </div>
            </div>

            
            <div className="flex flex-col space-y-3 text-sm py-2.5 px-1">
                <div className="text-sm font-medium inline-flex"><p>{item?.title}</p></div>
                <div className="flex flex-row items-center justify-between">
                    <div className="text-xs text-[#777777] text-light"><p>{item?.category}</p></div>

                    <div className="flex flex-row space-x-2 font-medium text-xs">
                        <span className="text-[#777777] line-through">{item?.oldPrice.length <= 0 ? '' : '$'}{item?.oldPrice}</span> 
                        <span className={`${item?.oldPrice.length <= 0 ? '' : 'text-red-400'}`}>${item?.price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProductItem