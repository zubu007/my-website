import Home from "./components/pages/HomePage/Home";
import About from "./components/pages/About/About";
import Projects from "./components/pages/Projects/Projects"
import Contact from "./components/pages/Contact/Contact"

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about'  component={About}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/contact' component={Contact}/>

      </Switch>
    </Router>
  );
}

export default App;
