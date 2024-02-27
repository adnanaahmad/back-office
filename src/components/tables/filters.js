import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import DropDownComponent from './dropdown';
import { Box, Stack, Typography } from '@mui/material';

export default function Filters() {
    return(
        <Stack direction={'row'} spacing={2}  alignItems='center'>
            <Stack direction={'row'} spacing={2} alignItems='center'>
                <Stack direction= 'row'  alignItems='center' spacing={1} sx={{border: '1px solid #c2d2d9', paddingY: .7, paddingX: 2, borderRadius: 1}}>
                    <SearchIcon sx={{color: 'grey'}}/>
                    <Typography variant='body2' color='grey' sx={{whiteSpace: 'nowrap'}}>Search by Application ID</Typography>                   
                </Stack>
            </Stack>
            <DropDownComponent/>
            <Stack direction= 'row'  alignItems='center' spacing={2} sx={{border: '1px solid #c2d2d9', paddingY: .7, paddingLeft: 2, paddingRight: 1, borderRadius: 1,  cursor: 'pointer'}}>
                <Typography variant='body2' sx={{whiteSpace: 'nowrap'}}>Past 30 Days</Typography>
                <ArrowDropDownIcon sx={{color: 'gray'}}/>
            </Stack>   
            <Box sx={{background: '#0376bc', borderRadius: 1, paddingY: 1, paddingX: 2, cursor: 'pointer'}}>
                <Typography variant='body2' fontWeight={500} sx={{whiteSpace: 'nowrap', color: 'white'}}>Export To CSV</Typography>
            </Box>             
        </Stack>
    )
}