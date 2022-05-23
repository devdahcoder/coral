import React, { useState } from 'react';
import { TabPanel } from '../Tab';
import BestSellerList from '../BestSellerList';
import ProductFrameContainer from '../Frame/ProductFrameContainer';
import { newProductHeaderLink } from '../../constants/newProductHeader';
// import { allNewProduct, tShirt, hoodie, jacket } from '../../constants/bestSeller';
import { allNewProduct, tShirt, hoodie, jacket } from '../../constants/newProduct';



const BestProduct = () => {

    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    
    return (
        <ProductFrameContainer handleChange={handleChange} value={value} headerText={'Best Sellers'} headerLinks={newProductHeaderLink}>
            <TabPanel value={value} index={0}>
                <BestSellerList products={allNewProduct} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <BestSellerList products={tShirt} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <BestSellerList products={hoodie} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <BestSellerList products={jacket} />
            </TabPanel>
        </ProductFrameContainer>
    )
}

export default BestProduct;