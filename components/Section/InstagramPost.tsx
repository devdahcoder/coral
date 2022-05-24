import React from 'react';
import BodyFrame from '../Frame/BodyFrame';
import { TiLocationArrowOutline } from 'react-icons/ti';
import { instagramPost } from '../../constants/instagramPost';
import InstagramPostItem from '../instagramPostItem';

type Props = {}

const InstagramPost = (props: Props) => {
    return (
        <div className="bg-[#F1F1F1]">
            <BodyFrame>
                <div className="flex flex-col text-center py-12 space-y-12">
                    
                    <div className="text-3xl font-semibold capitalize tracking-widest">
                        <p>Follow products and discounts on Instagram</p>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-6 gap-x-3">
                            {instagramPost.map(({id, imageLink}, index) => {
                                return (
                                    <div key={index}>
                                        <InstagramPostItem imageLink={imageLink} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center space-y-10">
                        <div className="text-3xl font-semibold capitalize tracking-widest">
                            <p>Or subscribe to the newsletter</p>
                        </div>

                        <div className="w-full max-w-[50%]">
                            <form action="" method="post">
                                <div className="flex flex-row items-center space-x-5">
                                    <div className="flex flex-row relative max-h-fit grow w-full items-center border-b-2 border-b-black">
                                        <input type="text" name="email" placeholder="Email Address..." 
                                            className="w-full font-medium bg-transparent border-transparent focus:border-transparent 
                                            focus:ring-0 outline-none outline-0 px-5 h-10 text-sm
                                            transition-all delay-150 placeholder:text-black" 
                                        />
                                    </div>
                                    <div className="">
                                        <button className="text-sm font-medium px-2 flex 
                                            flex-row items-center border-b-2 border-b-black h-10 outline-0 
                                            outline-none focus:outline-0 focus:outline-none" type="submit">Submit 
                                            <span className="ml-1.5"><TiLocationArrowOutline className="w-5 h-5" /></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </BodyFrame>
        </div>
    )
}

export default InstagramPost