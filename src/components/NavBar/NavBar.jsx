import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {  useNavigate } from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import CelebrationIcon from '@mui/icons-material/Celebration';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const NavBar = () => {
    const navigate = useNavigate();

    return (
        <>

            <AppBar position="relative" className="navnav" style={{ backgroundColor: "#22bb33" }} >
                <Toolbar>
                    <CenterFocusWeakIcon className="head" onClick={() => {
                        navigate(`/`);
                    }} style={{ fontSize: "30", marginRight: "10px", color: "white" }} />

                    <Typography className="head" onClick={() => {
                        navigate(`/`);
                    }} variant="h4" color="white" component="div" style={{ fontWeight: "bold" }} noWrap>
                        FunFocus
                    </Typography>

                </Toolbar>
            </AppBar>


        </>

    );
}

export { NavBar };


