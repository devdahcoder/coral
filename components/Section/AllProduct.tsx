import React from 'react';
import { newProductItem } from '../../constants/newProductsItem';
import AllProductItem from '../AllProductItem';

type Props = {}

const AllProduct = (props: Props) => {
    return (
        <div className="">
            <div className="grid grid-cols-4 gap-3">
                {
                    newProductItem.map((item: Record<string, any>, index: number) => {
                        return (
                            <div key={index} className="">
                                <AllProductItem item={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllProduct