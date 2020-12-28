import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider, Container, CssBaseline } from "@material-ui/core";
import { theme } from "./themes/theme";
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import Lyrics from './components/tracks/Lyrics'

import MusicProvider from './context'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <MusicProvider>
        <Router>
          <>
            <CssBaseline/>
            <Navbar/>
            <Container maxWidth="md">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </Container>
          </>
        </Router>
      </MusicProvider>
    </MuiThemeProvider>
  );
}

export default App;
