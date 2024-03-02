import { FunctionComponent } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from "../../assets/images/logo.png";

const AppHeader: FunctionComponent = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: "rgb(249 249 249)" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ height: 50 }}>
                        <img src={Logo} alt="logo" height="100%" />
                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            fontWeight: 700,
                            color: '#606064',
                            textDecoration: 'none',
                        }}
                    >
                        Home
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton sx={{
                            color: 'black',
                        }} >
                            <SettingsIcon fontSize="large" />
                        </IconButton>
                        <IconButton sx={{
                            color: 'black',
                        }} >
                            <AccountCircleIcon fontSize="large" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default AppHeader;