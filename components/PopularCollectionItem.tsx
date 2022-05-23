import React from 'react';
import ImageContainer from './ImageContainer';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { motion } from "framer-motion";

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
                
                <div className="flex flex-row items-center">
                    {props?.amount} Products <span className="ml-1"><MdProductionQuantityLimits /></span>
                </div>
            </div>
        </div>
    )
}

export default PopularCollectionItem