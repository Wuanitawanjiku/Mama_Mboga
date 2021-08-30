
import './App.css';
import {Link, BrowserRouter as Router, Route}from 'react-router-dom';
import Products from './Products.js';
import Fruits from './Fruits';
import Vegetables from './Vegetables';


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul className="navbar">
            <Link to="/" style={{textDecoration:"none"}}><li>Products</li></Link>
            <Link to="/fruits" style={{textDecoration:"none"}}><li>Fruits</li></Link>
            <Link to="/vegetables" style={{textDecoration:"none"}}><li>Vegetables</li></Link>

          </ul>
        </nav>
        <Route path="/" exact component = {Products}/>
        <Route path="/fruits" exact component = {Fruits}/>
        <Route path="/vegetables" exact component = {Vegetables}/>   
         </Router>
    </div>
  );
}

export default App;
