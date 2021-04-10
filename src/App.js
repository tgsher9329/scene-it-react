import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import MovieSection from './pages/MovieSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import SavedMovies from './pages/SavedMovies';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/" className="mr-6 pr-6">Tucker's Scene-It</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/savedMovies" className="mr-3">Movies List</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </nav>
        <Switch>
          <Route path="/" exact>
            <MovieSection />
          </Route>
          <Route path="/savedMovies" exact>
            <SavedMovies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
