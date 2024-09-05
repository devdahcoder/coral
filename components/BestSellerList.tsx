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
    disabled?: boolean;
}

const CAROUSEL_VALUE = 3;


const BestSellerList = ({products}: Props) => {


    const [currentIndex, setCurrentIndex] = useState(CAROUSEL_VALUE);
    const [translateValue, setTranslateValue] = useState(0);

    const carousel = React.useRef<any>();

    const goToPrevSlide = () => {
        if (currentIndex === CAROUSEL_VALUE) return;
        setTranslateValue(prev => prev - (25 * 1));
        setCurrentIndex(prev => prev - 1);
    }

    const goToNextSlide = () => {
        if (currentIndex === products.length - 1) return;
        setTranslateValue(prev => prev + (25 * 1));
        setCurrentIndex(prev => prev + 1);
    }

    console.log('translateValue ===>', translateValue);
    console.log('currentIndex ===>', currentIndex);
    

    const BtnContainer = ({onClick, text, icon, className, disabled }:BtnProps) => {
        return (
            <div className={`absolute top-1/2 translate-x-0 z-40 -translate-y-1/2 ${className}`}>
                <button onClick={onClick} className={`flex items-center justify-center border-none border-0 
                    outline-none outline-0 px-3 py-10 text-white z-40 ${disabled && disabled ? 'invisible' : 'visible'}`}>
                    <span>{icon}</span>
                </button>
            </div>
        )
    }

    return (
        <div className="relative">
            <BtnContainer 
                onClick={goToPrevSlide} 
                text="Best Sellers" 
                icon={<VscArrowLeft className="w-6 h-6" />} 
                className="left-0"
                disabled={currentIndex === CAROUSEL_VALUE}
            />
            <div className="relative flex flex-row h-fit">
            
                <motion.div 
                    
                    ref={carousel} className="relative overflow-x-hidden flex flex-row items-center justify-between">
                    
                    <div 
                        // drag="x"
                        // dragConstraints={{ left: 0, right: 0 }}
                        // dragElastic={0.5}
                        // dragMomentum={false}
                        // dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
                        className={`flex flex-row w-full space-x-3.5`}
                        style={{
                            display: "flex",
                            transform: `translateX(-${
                                translateValue
                            }%)`,
                            transition: "transform ease-out 0.5s",
                        }} 
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
                    </div>
                    
                </motion.div>
                
            </div>
            <BtnContainer 
                onClick={goToNextSlide} 
                text="Best Sellers" 
                icon={<VscArrowRight className="w-6 h-6" />} 
                className="right-0"
                disabled={currentIndex === products.length - 1}
            />
        </div>
    )
}

export default BestSellerList