import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar'
import Profile from './Pages/Profile'
import Blog from './Pages/Blog';

function App() {
  return (
    <>
      <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/blogs" component={Blog}/>
        </Switch>
    </>
  );
}

export default App;
