import * as React from 'react';
import { Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import { RunningWithErrors } from "@mui/icons-material";
import WarningIcon from '@mui/icons-material/Warning';

export const insightsOne = <Stack>
    <Stack direction={'row'} alignItems='center' spacing={1} justifyContent='flex-end'>
        <Typography sx={{fontSize: '12px'}}>Consumer:</Typography>
        <Stack direction={'row'} alignItems='center' spacing={.5}>
            <BlockIcon sx={{fontSize:'small', color: 'red'}}/>
            <Typography sx={{fontSize: '12px', color: 'red', whiteSpace: 'nowrap'}}>Not Verified</Typography>
        </Stack>
    </Stack>
    <Stack direction={'row'} spacing={1} justifyContent='flex-end'>
        <Typography sx={{fontSize: '12px'}}>Income: </Typography>
        <Stack direction={'row'} alignItems='center' spacing={.5}>
            <CheckCircleOutlinedIcon sx={{fontSize:'small', color: 'green'}}/>
            <Typography sx={{fontSize: '12px', color: 'green'}}>Verified</Typography>
        </Stack>
    </Stack>
    {/* <Stack direction={'row'} spacing={1} justifyContent='flex-end'>
        <Typography sx={{fontSize: '12px', whiteSpace: 'nowrap'}}>Small business: </Typography>
        <Stack direction={'row'} alignItems='center' spacing={.5}>
            <BlockIcon sx={{fontSize:'small', color: 'red'}}/>
            <Typography sx={{fontSize: '12px', color: 'red', whiteSpace: 'nowrap'}}>Not Verified</Typography>
        </Stack>
    </Stack> */}
</Stack>

export const insightsTwo = <Stack>
    <Stack direction={'row'} alignItems='center' spacing={1} justifyContent='flex-end'>
        <Typography sx={{fontSize: '12px'}}>Consumer:</Typography>
        <Stack direction={'row'} alignItems='center' spacing={.5}>
            <CheckCircleOutlinedIcon sx={{fontSize:'small', color: 'green'}}/>
            <Typography sx={{fontSize: '12px', color: 'green'}}>Verified</Typography>
        </Stack>
    </Stack>
    <Stack direction={'row'} spacing={1} justifyContent='flex-end'>
        <Typography sx={{fontSize: '12px'}}>Income: </Typography>
        <Stack direction={'row'} alignItems='center' spacing={.5}>
            <CheckCircleOutlinedIcon sx={{fontSize:'small', color: 'green'}}/>
            <Typography sx={{fontSize: '12px', color: 'green'}}>Verified</Typography>
        </Stack>
    </Stack>
    {/* <Stack direction={'row'} spacing={1} justifyContent='flex-end'>
        <Typography sx={{fontSize: '12px', whiteSpace: 'nowrap'}}>Small business: </Typography>
        <Stack direction={'row'} alignItems='center' spacing={.5}>
            <CheckCircleOutlinedIcon sx={{fontSize:'small', color: 'green'}}/>
            <Typography sx={{fontSize: '12px', color: 'green'}}>Verified</Typography>
        </Stack>
    </Stack> */}
</Stack>

export const insightsThree = <Stack>
    <Stack direction={'row'} alignItems='center' spacing={1} justifyContent='flex-end'>
        <Typography sx={{fontSize: '12px'}}>Consumer:</Typography>
        <Stack direction={'row'} alignItems='center' spacing={.5}>
            <WarningOutlinedIcon color='primary' sx={{fontSize:'small'}}/>
            <Typography color='primary' sx={{fontSize: '12px', whiteSpace: 'nowrap'}}>Needs Review</Typography>
        </Stack>
    </Stack>
    <Stack direction={'row'} spacing={1} justifyContent='flex-end'>
        <Typography sx={{fontSize: '12px'}}>Income: </Typography>
        <Stack direction={'row'} alignItems='center' spacing={.5}>
            <CheckCircleOutlinedIcon sx={{fontSize:'small', color: 'green'}}/>
            <Typography sx={{fontSize: '12px', color: 'green', whiteSpace: 'nowrap'}}>Verified</Typography>
        </Stack>
    </Stack>
    {/* <Stack direction={'row'} spacing={1} justifyContent='flex-end'>
        <Typography sx={{fontSize: '12px', whiteSpace: 'nowrap'}}>Small business: </Typography>
        <Stack direction={'row'} alignItems='center' spacing={.5}>
            <BlockIcon sx={{fontSize:'small', color: 'red'}}/>
            <Typography sx={{fontSize: '12px', color: 'red', whiteSpace: 'nowrap'}}>Not Verified</Typography>
        </Stack>
    </Stack> */}
</Stack>


export const insightsFour = <Stack>
    <Stack direction={'row'} alignItems='center' spacing={1} justifyContent='flex-end'>
        <Typography sx={{fontSize: '12px'}}>Consumer:</Typography>
        <Stack direction={'row'} alignItems='center' spacing={.5}>
            <WarningOutlinedIcon color='primary' sx={{fontSize:'small'}}/>
            <Typography color='primary' sx={{fontSize: '12px', whiteSpace: 'nowrap'}}>Needs Review</Typography>
        </Stack>
    </Stack>
    <Stack direction={'row'} spacing={1} justifyContent='flex-end'>
        <Typography sx={{fontSize: '12px'}}>Income: </Typography>
        <Stack direction={'row'} alignItems='center' spacing={.5}>
            <WarningOutlinedIcon color='primary' sx={{fontSize:'small'}}/>
            <Typography color='primary' sx={{fontSize: '12px', whiteSpace: 'nowrap'}}>Needs Review</Typography>
        </Stack>
    </Stack>
    {/* <Stack direction={'row'} spacing={1} justifyContent='flex-end'>
        <Typography sx={{fontSize: '12px', whiteSpace: 'nowrap'}}>Small business: </Typography>
        <Stack direction={'row'} alignItems='center' spacing={.5}>
            <WarningOutlinedIcon color='primary' sx={{fontSize:'small'}}/>
            <Typography color='primary' sx={{fontSize: '12px', whiteSpace: 'nowrap'}}>Need Review</Typography>
        </Stack>
    </Stack> */}
</Stack>

export const decisionOne = <Stack direction={'row'} justifyContent="space-around" alignItems='center' sx={{border: '1px solid #c2d2d9', paddingY: .3, paddingX: 1, borderRadius: 1,  cursor: 'pointer'}}>
    <Typography  sx={{fontSize: '12px', whiteSpace: 'nowrap'}}>No Action</Typography>
    <ExpandMoreIcon sx={{color: 'grey', fontSize: 'medium'}}/>
</Stack>

export const decisionTwo = <Stack direction={'row'} alignItems='center' sx={{border: '1px solid #00b0b5', paddingY: .3, paddingX: 1, borderRadius: 1,  cursor: 'pointer'}}>
    <Typography  sx={{fontSize: '12px', color: '#00b0b5', marginX: 'auto'}}>APPROVED</Typography>
</Stack>

export const decisionThree = <Stack direction={'row'} alignItems='center' sx={{border: '1px solid red', paddingY: .3, paddingX: 1, borderRadius: 1,  cursor: 'pointer'}}>
    <Typography  sx={{fontSize: '12px', color: 'red', marginX: 'auto'}}>REJECTED</Typography>
</Stack>

export const steps = [
    'Individual Information',
    'Income Information',
    'Employment Information',
    'Loan Information',
    // 'Small Business Information',
    'Consumer Insights',
    // 'Small Business Insights',
    'Send Verification Email',
    'Multi-factor Authentication',
    'Document Verification',
    'Bank Verification',
    'Income Insights',
];

export const expiredTag = (
  <Typography
    component={"div"}
    sx={{
      background: "#929292",
      color: "white",
      borderRadius: 1,
      p: 0.5,
      fontSize: "12px",
    }}
  >
    EXPIRED
  </Typography>
);
export const expiredStatusTag = <span style={{background: '#929292', color: 'white', borderRadius: 3, padding: 2, fontSize: '12px'}}>EXPIRED</span>;
export const expiredStatusTitle = (
  <Stack direction={"row"} spacing={1}>
    <RunningWithErrors sx={{ color: "#929292" }} />
    <Typography variant="body1" fontWeight={600}>
      Expired
    </Typography>
  </Stack>
);
export const notVerifiedTitle = (
    <Stack direction={'row'} spacing={1}>
        <BlockIcon sx={{color: '#DE4A0B'}}/>
        <Typography variant="body1" fontWeight={600}>Not Verified</Typography>
    </Stack> 
);
export const verifiedTitle = (
    <Stack direction={'row'} spacing={1}>
        <CheckCircleOutlinedIcon sx={{color: 'green'}}/>
        <Typography variant="body1" fontWeight={600}>Verified</Typography>
    </Stack> 
);
export const actionRequiredTitle = (
    <Stack direction={'row'} spacing={1}>
        <WarningIcon sx={{color: '#0376bc'}}/>
        <Typography variant="body1" fontWeight={600}>Action Required</Typography>
    </Stack> 
);
export const needsReviewTitle = (
    <Stack direction={'row'} spacing={1}>
        <WarningIcon sx={{color: '#0376bc'}}/>
        <Typography variant="body1" fontWeight={600}>Needs Review</Typography>
    </Stack> 
);

export const errorDetailsFunction = (error, code, time) => {
    return (
        <React.Fragment>
            <Typography variant="body2" color={'#DE4A0B'}><span style={{ fontWeight: '600' }}>Error:</span> {error}</Typography>
            <Typography variant="body2"><span style={{ fontWeight: '600' }}>Reason code:</span> {code}</Typography>
            <Typography variant="body2"><span style={{ fontWeight: '600' }}>Time of Occurrence:</span> {time}</Typography>
        </React.Fragment>
    );
}

export const actionRequiredDetailsFunction = (step) => {
    return (
        <React.Fragment>
            <Typography variant="body2"><span style={{ fontWeight: '600' }}>Step:</span> {step}</Typography>
        </React.Fragment>
    );
}
export function createData(timeStamp, step, activity, statusCode, statusCodeDescription) {
    return { timeStamp, step, activity, statusCode, statusCodeDescription };
}
