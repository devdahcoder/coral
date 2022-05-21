import React from 'react';
import BodyFrame from '../Frame/BodyFrame';
import PopularCollectionItem from '../PopularCollectionItem';

const PopularCollection = () => {

    const popularCollection = [
        {
            id: 1,
            imageLink: 'https://images.unsplash.com/photo-1604120745969-ec66b59a3242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=433&q=80',
            title: 'Classics',
            amount: 300,
            className: 'border col-span-2 row-span-2'
        },
        {
            id: 2,
            imageLink: 'https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=648&q=80',
            title: 'Shoes',
            amount: 250,
            className: ''
        },
        {
            id: 3,
            imageLink: 'https://images.unsplash.com/photo-1588190464153-0b4082f4f923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&q=80',
            title: 'Bags',
            amount: 500,
            className: ''
        },
        {
            id: 4,
            imageLink: 'https://images.unsplash.com/photo-1610384104075-e05c8cf200c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            title: 'Mens',
            amount: 100,
            className: ''
        },
        {
            id: 5,
            imageLink: 'https://images.unsplash.com/photo-1542062700-9b61ccbc1696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Street Wears',
            amount: 130,
            className: ''
        },
    ]
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