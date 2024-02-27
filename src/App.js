import * as React from 'react';
import { Box, CircularProgress, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import FooterComponent from "./components/footer/footer";
import HeaderComponent from "./components/header/header";
import StatusComponent from "./components/status/status";
import { LightTheme } from './core/light-theme';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ApplicationComponent from "./components/application/application";
import SettingsComponent from './components/settings/settings';

function App() {
  return (
    <Box sx={{height: '100vh'}}>
      <ThemeProvider theme={LightTheme}>
        <CssBaseline />
        <React.Suspense fallback={<CircularProgress />}>
          <Router>
            <Stack height={'100%'}>
              <HeaderComponent/>
              <Routes>
                <Route path={''} element={<StatusComponent/>}/>
                <Route path={'/application/:id'} element={<ApplicationComponent/>}></Route>
                <Route path={'/settings'} element={<SettingsComponent/>}></Route>
              </Routes>             
              <FooterComponent/>
            </Stack>
          </Router>
        </React.Suspense>  
      </ThemeProvider>
    </Box>
  );
}

export default App;
