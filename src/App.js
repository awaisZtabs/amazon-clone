import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
              <h1>IM AM CGECOUT</h1>
          </Route>
          <Route   path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>  
    </Router>
  );
}

export default App;
