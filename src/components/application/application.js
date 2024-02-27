import * as React from 'react';
import { Box, Stack, Typography, useTheme, useMediaQuery, Button } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import SearchIcon from '@mui/icons-material/Search';
import FlowChart from "../flowChart/flowChart";
import ActivityLog from "./activityLog";
import { userData } from "../../mock/mockData";
import { useParams } from 'react-router-dom';


export default function ApplicationComponent(){
    const theme = useTheme();
    const matchesMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return(
        <Box sx={{height: '100%'}}>
            <Box sx={{background: '#f6f6f6', borderBottom: '1px solid #c2d2d9',}}>
                <Stack direction={'row'} justifyContent='space-between' alignItems={'center'} sx={{paddingY: 1.5, paddingX:1, maxWidth: '1440px', marginX: 'auto'}}>
                    <Link to={'/'} style={{ textDecoration:'none' }}>
                        <Stack direction={'row'} alignItems='center'>
                            <KeyboardArrowLeftIcon sx={{color: '#000000de'}}/>
                            <Typography variant="body2" sx={{color: '#000000de'}}>{matchesMobile ? 'Back' : 'Back to Applications'}</Typography>
                        </Stack>
                    </Link>
                    <Box sx={{background: 'white', marginRight: matchesMobile ? 0 : 3}}>
                        <Stack direction= 'row'  alignItems='center' spacing={1} sx={{border: '1px solid #c2d2d9', paddingY: .7, paddingX: matchesMobile ? 1 : 2, borderRadius: 1}}>
                            <SearchIcon sx={{color: '#8080809c'}}/>
                            <Typography variant='body2' sx={{color: '#8080809c'}}>{matchesMobile ? 'Search by App ID' : 'Search by Application ID'}</Typography>                   
                        </Stack>
                    </Box>
                </Stack>
            </Box>
            <ApplicationDetails/>
        </Box>
    )
}

const ApplicationDetails = () => {
    let { id } = useParams();
    return (
      <Stack direction="row" alignItems="stretch" sx={{height: '100%'}}>
        <Box sx={{minWidth: '100px',}}>
            <Stack spacing={4} padding={2}>
                <Stack>
                    <Typography variant="body2">Application ID</Typography>
                    <Typography variant="body1" fontWeight={700} sx={{overflowWrap: 'break-word'}}>{userData[id].appID}</Typography>
                    <Button variant="outlined" sx={{width: 'fit-content'}}>Copy ID</Button>
                </Stack>
                <Stack>
                    <Typography variant="body2">Name</Typography>
                    <Typography variant="body1" fontWeight={700} sx={{overflowWrap: 'break-word'}}>{userData[id].name}</Typography>
                    <Button variant="outlined" sx={{width: 'fit-content', whiteSpace: 'nowrap'}}>Copy Name</Button>
                </Stack>
                <Stack>
                    <Typography variant="body2">Date Created</Typography>
                    <Typography variant="body2" fontWeight={600} sx={{overflowWrap: 'break-word'}}>{userData[id].date}</Typography>
                </Stack>
            </Stack>
        </Box>
        <Box sx={{borderLeft: '1px solid #bdbdbd', flex: 1, overflowX: 'scroll', padding: '20px'}}>
            <Stack spacing={3}>
                <Box sx={{overflowX: 'auto'}}>
                    <FlowChart data={userData[id]}/>
                </Box>
                <Stack spacing={2}>
                    <Typography variant='h6' fontWeight={600}>Status</Typography>
                    <Stack sx={{borderTop: '1px solid #bdbdbd', borderBottom: '1px solid #bdbdbd'}} paddingY={2} spacing={1}>
                        {userData[id].status.title}
                        <Stack>
                            {
                                userData[id].status.details &&
                                userData[id].status.details

                            }
                            {
                                userData[id].statusTag &&
                                <Typography variant="body2" sx={{marginTop: 2}}>Tag: {userData[id].statusTag}</Typography>
                            }                  
                        </Stack>
                    </Stack>
                </Stack>
                <Box>
                    <Stack>
                        <Typography variant='h6' fontWeight={600}>Activity Log</Typography>
                        <ActivityLog data={userData[id].activityLog}/>
                    </Stack>
                </Box>
            </Stack>
        </Box>
      </Stack>
    );
  };