import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Forum from '@mui/icons-material/Forum';

function Logo() {
    return (
        <Box
            sx={{
                display: "flex",
                flexFlow: "row wrap",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
            }}
        >
            <Forum sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Link to='/'>
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    APP'RESAHO
                </Typography>
            </Link>
        </Box>
    )
}

export default Logo