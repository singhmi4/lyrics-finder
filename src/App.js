import './App.css';
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme";
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Navbar/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
