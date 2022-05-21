import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import BodyFrame from '../Frame/BodyFrame';
import { a11yProps, TabPanel } from '../Tab';
import { newProductHeaderLink } from '../../constants/newProductHeader';
import { FiFilter } from 'react-icons/fi';
import AllProduct from './AllProduct';

type Props = {}

const NewProducts = (props: Props) => {

    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    
    return (
        <div>
            <BodyFrame>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-center text-2xl text-center font-semibold">
                        <p>New Products</p>
                    </div>
                    <div className="flex flex-col">
                        <div>

                        </div>
                        <div>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Tabs 
                                        value={value} 
                                        onChange={handleChange} 
                                        aria-label="basic tabs example"
                                        TabIndicatorProps={{
                                            style: {
                                                display: "none",
                                            },
                                        }}
                                        
                                    >
                                        {
                                            newProductHeaderLink.map((item: Record<string, any>, index: number) => {
                                                return (
                                                    <Tab style={{color: `${value === item.id ? 'black' : ''}`}} key={index} className={`!capitalize !font-inter`} label={item?.label} {...a11yProps(item?.id)} />
                                                )
                                            })
                                        }
                                    </Tabs>

                                    <Box>
                                        <button className="px-3.5 py-2 rounded-sm text-xs bg-black text-white flex flex-row items-center" >
                                            <span className="mr-2"><FiFilter /></span> Filter
                                        </button>
                                    </Box>
                                    
                                </Box>
                                <TabPanel value={value} index={0}>
                                    <AllProduct />
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    Item Two
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    Item Three
                                </TabPanel>
                            </Box>
                        </div>
                    </div>
                </div>
            </BodyFrame>
        </div>
    )
}

export default NewProducts