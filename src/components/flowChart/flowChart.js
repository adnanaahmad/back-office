import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Stack, Typography } from '@mui/material';
import { steps } from '../../core/helper';

export default function FlowChart({data:{activeStep}}) {
    const activeStepIndex = steps.indexOf(activeStep) + 1;
    const style = {
        '& .MuiStepLabel-root .Mui-completed': {
            color: '#42C27D' // circle (COMPLETED)
        },
        '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
        {
          color: '#142D53', // text label (COMPLETED)
        },
        '& .MuiStepLabel-root .Mui-active': {
            color: '#DE4A0B', // circle (ACTIVE)
        },
        '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
        {
            color: '#142D53', // Just text label (ACTIVE)
            fontWeight: '700'
        },
    }
    return (
        <Stack sx={{ width: '100%' }} spacing={3}>
            <Typography variant='h6' fontWeight={600}>Progress</Typography>
            <Stepper activeStep={activeStepIndex} alternativeLabel>
                {steps.map((label) => (
                <Step sx={style} key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
        </Stack>
    );
}
