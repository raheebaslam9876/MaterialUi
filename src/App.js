import './App.css';
import Test from './Test'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Sidebar from "./component/Sidebar";
import Feed from "./component/Feed";
import Rightbar from "./component/Rightbar"
import { Box, Stack } from '@mui/system';
import Navbar from './component/Navbar';
function App() {
  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#303f9f"
  //     }
  //   },
  //   typography: {
  //     fontFamily: 'Quicksand',
  //     fontWeightLight: 300,
  //     fontWeightRegular: 400,
  //     fontWeightMedium: 500,
  //     fontWeightBold: 700,
  //   }
  // })
  return (
    // <ThemeProvider theme={theme}>
    //   <Test />
    // </ThemeProvider >
    <Box>
      <Navbar />
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
