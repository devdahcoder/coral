import React, { Children } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { a11yProps, TabPanel } from '../Tab';
import { FiFilter } from 'react-icons/fi';
import BodyFrame from './BodyFrame';

type Props = {
    headerText: string;
    headerLinks: Record<string, any>[];
    children: React.ReactNode;
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const ProductFrameContainer = (props: Props) => {
    return (
        <div className="mt-28 mb-20">
            <BodyFrame>
                <div className="flex flex-col space-y-7">
                    <div className="flex flex-row items-center justify-center text-3xl text-center font-semibold">
                        <p>{props?.headerText}</p>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '20px' }}>
                                    <Tabs 
                                        value={props?.value} 
                                        onChange={props?.handleChange} 
                                        aria-label="basic tabs example"
                                        TabIndicatorProps={{
                                            style: {
                                                display: "none",
                                            },
                                        }}
                                        
                                    >
                                        {
                                            props?.headerLinks.map((item: Record<string, any>, index: number) => {
                                                return (
                                                    <Tab style={{color: `${props?.value === item.id ? 'black' : ''}`}} key={index} className={`!capitalize !font-inter`} label={item?.label} {...a11yProps(item?.id)} />
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
                                {
                                    props?.children
                                }
                            </Box>
                        </div>
                    </div>
                </div>
            </BodyFrame>
        </div>
    )
}

export default ProductFrameContainer