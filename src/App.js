import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Home from './components/Home';

function App() {
  return (
    <>
   
        <Router>
          <Navbar />
          {/* <Home /> */}
          <Switch>
            <Route path='/'/>
          </Switch>
        </Router>
      
    </>
  );
}

export default App;
