import React, { useState } from 'react';
import { TabPanel } from '../Tab';
import ProductListing from '../ProductListing';
import ProductFrameContainer from '../Frame/ProductFrameContainer';
import { newProductHeaderLink } from '../../constants/newProductHeader';
import { allNewProduct, tShirt, hoodie, jacket } from '../../constants/newProduct';

const NewProducts = () => {

    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    
    return (
        <ProductFrameContainer handleChange={handleChange} value={value} headerText={'New Products'} headerLinks={newProductHeaderLink}>
            <TabPanel value={value} index={0}>
                <ProductListing products={allNewProduct} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ProductListing products={tShirt} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ProductListing products={hoodie} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <ProductListing products={jacket} />
            </TabPanel>
        </ProductFrameContainer>
    )
}

export default NewProducts