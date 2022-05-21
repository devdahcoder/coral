import React from 'react'
import ImageContainer from './ImageContainer'

type Props = {
    item: Record<string, any>;
}

const AllProductItem = ({item}: Props) => {
    return (
        <div className="relative">
            <ImageContainer imageLink={item?.imageLink} />
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