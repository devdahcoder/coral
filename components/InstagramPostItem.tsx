import React from 'react';
import ImageContainer from './ImageContainer';
import { BsInstagram } from 'react-icons/bs';

type Props = {
    imageLink: string;
}

const InstagramPostItem = (props: Props) => {
    return (
        <div className="group cursor-pointer relative">
            <div className="relative">
                <ImageContainer imageLink={props.imageLink} />
            </div>

            
            <div className="text-white invisible flex flex-row items-center justify-center absolute top-0 
                left-0 w-full h-full bg-black opacity-50 z-40 group-hover:visible">
                <div className="flex flex-row items-center justify-center text-center">
                    <BsInstagram className="w-8 h-8" />
                </div>
            </div>
        </div>
    )
}

export default InstagramPostItem;