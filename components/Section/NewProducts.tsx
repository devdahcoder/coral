import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import BodyFrame from '../Frame/BodyFrame';
import { a11yProps, TabPanel } from '../Tab';

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
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label="Item One" {...a11yProps(0)} />
                                        <Tab label="Item Two" {...a11yProps(1)} />
                                        <Tab label="Item Three" {...a11yProps(2)} />
                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0}>
                                    Item One
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