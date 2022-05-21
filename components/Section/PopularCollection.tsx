import React from 'react';
import BodyFrame from '../Frame/BodyFrame';
import PopularCollectionItem from '../PopularCollectionItem';
import { popularCollection } from '../../constants/popularCollection';

const PopularCollection = () => {

    
    return (
        <div className="relative">
            <BodyFrame className="relative">
                <div className="text-2xl absolute -left-10 bottom-0 
                    origin-top-left -rotate-[90deg]">Explore new and popular styles</div>
                <div className="grid grid-cols-4 grid-rows-2 gap-5">
                    {
                        popularCollection.map(item => (
                            <div key={item.id} className={`group ${item.className}`}>
                                <PopularCollectionItem
                                    imageLink={item.imageLink}
                                    title={item.title}
                                    amount={item.amount}
                                />
                            </div>
                        ))
                    }
                </div>
            </BodyFrame>
        </div>
    )
}

export default PopularCollection