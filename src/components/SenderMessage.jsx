import React from 'react';
import {Person} from '@mui/icons-material';
import { Box, Chip, Avatar } from '@mui/material';

/*192.168.43.44*/


function SenderMessage({message_text}) {
    return (
        <Box
            sx={{
                margin: "1% 0%",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "flex-start",
                alignItems: "center",
            }}
        >
            <Avatar sx={{ width: "25px", height: "25px" }}>
                <Person />
            </Avatar>
            <Box
                sx={{
                    margin: "0% 1%",
                    display: "flex",
                    flexFlow: "column nowrap",
                    textAlign: "left",
                }}
            >
                <Chip label={message_text} variant="outlined" sx={{bacgroundColor: "#decbb7"}}/>
            </Box>
        </Box>
    )
}

export default SenderMessage