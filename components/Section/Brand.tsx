import React from 'react';
import BodyFrame from '../Frame/BodyFrame';
import BrandOne from '../../public/Images/brand-1.png';
import BrandTwo from '../../public/Images/brand-2.png';
import BrandThree from '../../public/Images/brand-3.png';
import BrandFour from '../../public/Images/brand-4.png';
import BrandFive from '../../public/Images/brand-5.png';

type Props = {}

const Brand = (props: Props) => {


    const brandImages = [
        {
            id: 1,
            image: BrandOne,
        },
        {
            id: 2,
            image: BrandFive,
        },
        {
            id: 3,
            image: BrandThree,
        },
        {
            id: 4,
            image: BrandFour,
        },
        {
            id: 5,
            image: BrandTwo,
        }
    ]

    return (
        <div>
            <BodyFrame>
                <div className="flex flex-row items-center justify-between py-16">
                    {
                        brandImages.map((brand: Record<string, any>, index: number) => (
                            <div key={index}>
                                <div className="rounded-md">
                                    <img src={brand?.image.src} alt="brand logo" className="w-full h-full object-contain" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </BodyFrame>
            
        </div>
    )
}

export default Brand