import React, { useEffect, useState } from 'react'
import AllProductItem from './AllProductItem';
import { VscArrowRight, VscArrowLeft } from 'react-icons/vsc';
import { motion } from 'framer-motion';

type Props = {
    products: Record<string, any>[];
}

type BtnProps = {
    onClick?: () => void;
    text?: string;
    icon?: React.ReactElement;
    className?: string;
}


const BestSellerList = ({products}: Props) => {

    // build a carousel
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);

    const [width, setWidth] = useState(0);
    const carousel = React.useRef<any>();

    // const goToPrevSlide = () => {
    //     if (currentIndex === 0) return;
    //     setTranslateValue(prev => prev - (window.innerWidth * 0.8));
    //     setCurrentIndex(prev => prev - 1);
    // }

    // const goToNextSlide = () => {

    //     if (currentIndex === products.length - 1) return;
    //     setTranslateValue(prev => prev + (window.innerWidth * 0.8));
    //     setCurrentIndex(prev => prev + 1);
    // }

    // useEffect(() => {
    //     if (currentIndex === products.length - 1) {
    //         setTranslateValue(0);
    //         setCurrentIndex(0);
    //     }
    // }, [currentIndex, products.length])


    // const [currentProduct, setCurrentProduct] = useState<Record<string, any>>(products[0]);

    // // next slider button
    // const next = () => {

    //     const newIndex = currentProduct?.index + 1;

    //     setCurrentProduct(products[newIndex]);

    // };



    // // previous slider button
    // const prev = () => {
        
    //     const newIndex = currentProduct?.index - 1;

    //     setCurrentProduct(products[newIndex]);

    // };

    const BtnContainer = ({onClick, text, icon, className }:BtnProps) => {
        return (
            <div className={`absolute top-1/2 translate-x-0 -translate-y-1/2 ${className}`}>
                <button onClick={onClick} className="flex items-center justify-center border-none border-0 
                    outline-none outline-0 px-3 py-10 text-white">
                    <span>{icon}</span>
                </button>
            </div>
        )
    }

    return (
        <div className="relative h-fit">
            <BtnContainer 
                onClick={() => {}} 
                text="Best Sellers" 
                icon={<VscArrowLeft />} 
                className="left-0"
            />
            <motion.div ref={carousel} className="relative overflow-x-hidden flex flex-row items-center justify-between">
                
                <motion.div 
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.5}
                    dragMomentum={false}
                    dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
                    className={`flex flex-row border w-full space-x-4`}
                >
                    {
                        products.map((item: Record<string, any>, index: number) => {
                            return (
                                <div key={index} className="flex w-full min-w-[260px]">
                                    <AllProductItem item={item} />
                                </div>
                            )
                        })
                    }
                </motion.div>
                
            </motion.div>
            {/* <BtnContainer 
                onClick={goToNextSlide} 
                text="Best Sellers" 
                icon={<VscArrowRight />} 
                className="right-0"
            /> */}
        </div>
    )
}

export default BestSellerList