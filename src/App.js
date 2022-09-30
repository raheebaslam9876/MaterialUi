import './App.css';
import Test from './Test'
import { createTheme, ThemeProvider } from '@mui/material/styles'
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#303f9f"
      }
    },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Test />
    </ThemeProvider >
  );
}

export default App;
