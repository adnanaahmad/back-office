import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NavComponent from '../nav/nav';
import { useLocation, useNavigate } from 'react-router-dom';

export default function HeaderComponent() {
    const theme = useTheme();
    const matchesMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const navigate = useNavigate();
    const location = useLocation();
    const [hide, setHide] = React.useState(false);
    React.useEffect(()=> {
        if(location.pathname === "/settings"){
            setHide(true);
        } else {
            setHide(false);
        }
    }, [location.pathname])
  return (
    <Stack>
         <AppBar position="static" elevation={0}>
            <Toolbar sx={{width: '100%', maxWidth: '1024px', marginX: 'auto'}}>
                <Stack direction={'row'} alignItems='center' sx={{ flexGrow: 1, position: 'relative' }} spacing={matchesMobile ? 2.5 : 5}>
                    <Typography onClick={() => navigate('/')} sx={{cursor: 'pointer'}} variant={matchesMobile ? 'h6' : 'h5'} fontWeight={600} > Any Bank </Typography>
                    {/* <Stack direction={'row'}>
                        <Typography>Branch</Typography>
                        <Box sx={{background: '#ffffff1a', position: 'absolute', left: matchesMobile ? 189 : 225, top: -16, height: 64, width: matchesMobile ? 70 : 100, display: 'flex'}}>
                            <Typography sx={{margin: 'auto'}} >Digital</Typography>
                        </Box>                    
                    </Stack> */}
                </Stack>
                {
                    !matchesMobile &&
                    <Stack direction={'row'} spacing={4}>
                        <HelpOutlineOutlinedIcon/>
                        <SettingsOutlinedIcon sx={{cursor: 'pointer'}} onClick={() => navigate('/settings')}/>
                        <PersonOutlineOutlinedIcon/>
                    </Stack>
                }
                {
                    matchesMobile &&
                    <MoreVertIcon/>
                }
            </Toolbar>
        </AppBar>
        {
            !hide &&
            <NavComponent/>
        }
        
    </Stack>
  );
}
