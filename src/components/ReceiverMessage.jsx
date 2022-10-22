import React from 'react';
import { Person } from '@mui/icons-material';
import { Box, Chip, Avatar } from '@mui/material';

function ReceiverMessage({message_text}) {
    return (
        <Box
            sx={{
                margin: "1% 0%",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "flex-end",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    margin: "0% 1%",
                    display: "flex",
                    flexFlow: "column nowrap",
                    textAlign: "left",
                }}
            >
                <Chip label={message_text} variant="outlined" sx={{bacgroundColor: "#f7f0f5"}}/>
            </Box>
            <Avatar sx={{ width: "25px", height: "25px" }}>
                <Person />
            </Avatar>
        </Box>
    )
}

export default ReceiverMessage