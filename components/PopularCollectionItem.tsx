import React from 'react'

type Props = {
    imageLink: string;
    title: string;
    amount: number;
}

const PopularCollectionItem = (props: Props) => {
    return (
        <div className="relative">
            <div className="block w-full">
                <div className="relative block overflow-hidden pb-[100%]">
                    <img src={props?.imageLink} alt="image" className="w-full h-full absolute top-0 left-0 select-none object-cover" />
                </div>
            </div>

            <div className="bg-primary-100 flex flex-row items-center justify-between 
                py-3 px-2 absolute invisible bottom-0 left-0 w-full text-white text-sm font-light capitalize
                group-hover:visible">
                <div className="">
                    {props?.title}
                </div>
                <div>
                    {props?.amount} Products
                </div>
            </div>
        </div>
    )
}

export default PopularCollectionItem