import { Box, useMediaQuery, useTheme  } from '@mui/material';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import ExpiredTable from '../tables/expired';
import InProgessTable from '../tables/inProgress';
import CompletedTable from '../tables/completed';


export default function StatusComponent() {
  const theme = useTheme();
  const matcheslaptop = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box sx={{ flexGrow: 1, paddingX: 1, border: '1px solid transparent'}}>
        <Box sx={{width: '100%', maxWidth: '1024px', marginX: 'auto', border: '1px solid #c2d2d9', marginTop: matcheslaptop ? 4 : 7, marginBottom: 1}}>
            <BasicTabs/>
        </Box>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      width: '100%',
      backgroundColor: '#0376bc',
    },
  });
  
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: 'black',
      '&.Mui-selected': {
        color: 'black',
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
    }),
  );

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <StyledTabs
          aria-label="styled tabs example"
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <StyledTab label="Expired (4)" />
          <StyledTab label="In Progress (3)" />
          <StyledTab label="Completed (4)" />
        </StyledTabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ExpiredTable/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InProgessTable/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CompletedTable/>
      </TabPanel>
    </Box>
  );
}
