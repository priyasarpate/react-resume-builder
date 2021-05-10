import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Spinner from './components/Spinner';
import TemplateOne from './components/Templates/TemplateOne';
import TemplateForm from './components/Templates/TemplateForm';


function App() {
  return (
    <>

      <Router>
        <div className="App">

          <Switch>

          

            <Route path="/template">
              <TemplateOne/>
            </Route>    

            <Route path="/templateform">
              <TemplateForm/>
            </Route>      
              <Route path="/spinner">        
               <Spinner />
            </Route> 

            <Route path="/">
              <Navbar />
              <Home />
            </Route>

            {/* <Route path="/navbar" component={Navbar} />
            <Route path="/template" component={TemplateOne} />
            <Route path="/templateform" component={TemplateForm} />
            <Route path="/spinner" component={Spinner} />
            <Route path="/" component={Home} />  */}


          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;
