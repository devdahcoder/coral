import React from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';


export function TabPanel(props: {
    children?: React.ReactNode;
    index: number;
    value: number;
    classStyle?: string;
}) {
    const { children, value, classStyle, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box >
                {children}
            </Box>
        )}
        </div>
    );
}

export function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
