import React from 'react';
import Logo from './Logo';
import MenuBar from './MenuBar';
import Settings from './Settings';
import { AppBar, Toolbar, Container } from '@mui/material';


function Header() {

    return (
        <AppBar position="sticky" sx={{ width: "100%", backgroundColor: "#433633" }}>
            <Container maxWidth="xl" sx={{ width: "100%" }}>
                <Toolbar
                    disableGutters
                    sx={{
                        display: "flex",
                        flexFlow: "row wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Logo />
                    <MenuBar />
                    <Settings/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header