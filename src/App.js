import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider, Container } from "@material-ui/core";
import { theme } from "./themes/theme";
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'

import MusicProvider from './context'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <MusicProvider>
        <Router>
          <>
            <Navbar/>
            <Container maxWidth="lg">
              <Switch>
                <Route exact="/" component={Index} />
              </Switch>
            </Container>
          </>
        </Router>
      </MusicProvider>
    </MuiThemeProvider>
  );
}

export default App;
