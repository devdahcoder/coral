import React from 'react';
import ImageContainer from './ImageContainer';

type Props = {
    imageLink: string;
    title: string;
    amount: number;
}

const PopularCollectionItem = (props: Props) => {
    return (
        <div className="relative">
            
            <ImageContainer imageLink={props?.imageLink} />

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