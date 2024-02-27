import { Box, Stack, Typography } from '@mui/material';
import { useRef, useEffect } from 'react';

export default function NavComponent() {
  const ref = useRef(0);
  useEffect(()=>{
    ref.current.scrollLeft += 200
  }, [])
  return (
    <Box sx={{background: '#f6f6f6', borderBottom: '1px solid #c2d2d9', paddingX: 1, overflowX: 'auto'}} ref={ref}>
      <Stack direction={'row'} alignItems='center' spacing={3} sx={{width: '100%', maxWidth: '1024px', marginX: 'auto', paddingRight: 1}}>
        {/* <Typography variant='body2' sx={{whiteSpace:'nowrap', cursor: 'pointer'}}>Dashboard</Typography> */}
        <Typography variant='body2' sx={{whiteSpace:'nowrap', cursor: 'pointer'}}>Credit Card</Typography>
        <Typography variant='body2' sx={{borderBottom: '2px solid #00b0b5', lineHeight: 2.5, whiteSpace:'nowrap', cursor: 'pointer'}}>Personal Loan</Typography>
        <Typography component={'div'} sx={{whiteSpace:'nowrap', cursor: 'pointer'}} variant='body2'>Small Business Loan</Typography>
        <Typography sx={{opacity: 0}}>1</Typography>
      </Stack>
    </Box>
  );
}
