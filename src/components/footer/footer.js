import { Box, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";

export default function FooterComponent() {
    const theme = useTheme();
    const matchesMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return(
        <Box sx={{background: '#f6f6f6', borderTop: '1px solid #c2d2d9', paddingX: 1, paddingY: matchesMobile ? 2 : 3, marginTop: 'auto'}}>
            <Stack sx={{width: '100%', maxWidth: '1024px', marginX: 'auto'}} direction='row' spacing={2} justifyContent='flex-end' alignItems={'center'}>
                <Typography variant="body2" color='GrayText'>Support</Typography>
                <Typography variant="body2" color='GrayText'>Terms & Conditions</Typography>
                <Box component="img" sx={{height: 29, width: 131}} src={' https://demo.fortifid.com/footer-logo.png'}/>
            </Stack>
        </Box>
    )
}