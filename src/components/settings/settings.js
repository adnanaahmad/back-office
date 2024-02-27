import { Box, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import settingsImage from '../../assets/settings.png';

export default function SettingsComponent(){
    const theme = useTheme();
    return(
        <Box>
            <Stack sx={{maxWidth: '1300px', marginX: 'auto'}}>
                <Box component="img" sx={{height: '100%', width: '100%'}} src={settingsImage}/>
            </Stack>
        </Box>
    )
}