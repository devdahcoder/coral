import React from 'react';
import Zara from '../../public/Images/1024px-Zara_Logo 2.png';
import { BsCollection } from 'react-icons/bs';

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className="relative">
            <div className="bg-zara-image bg-no-repeat bg-center bg-cover border relative pt-12">
                <div className="bg-zara bg-no-repeat bg-right-top bg-contain h-[200px] z-0"></div>

                <div className="flex flex-row justify-end">
                    <div className=" mb-10 mr-52 text-white flex flex-col 
                        space-y-7 w-[23%] leading-6 text-sm "
                    >
                        <div>
                            <img src={Zara?.src} alt="zara" className="w-24" />
                        </div>

                        <div>
                            <p>Lustrous yet understated. The new evening
                                wear collection exclusively offered at the
                                reopened Giorgio Armani boutique in Los
                                Angeles.
                            </p>
                        </div>

                        <div>
                            <button className="flex flex-row items-center rounded-sm text-black py-3 
                                        px-5 bg-white hover:bg-black hover:text-white hover:transition-all">
                                <span className="mr-2"><BsCollection /></span>See Collection
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner