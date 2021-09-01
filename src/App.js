
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
            <Link to="/" style={{textDecoration:"none", color:'green'}}><li>Products</li></Link>
            <Link to="/fruits" style={{textDecoration:"none", color:'green'}}><li>Fruits</li></Link>
            <Link to="/vegetables" style={{textDecoration:"none", color:'green'}}><li>Vegetables</li></Link>

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

// $(document).ready(function(){
//   $(window).scroll(function(){
//       // sticky navbar on scroll script
//       if(this.scrollY > 20){
//           $('.navbar').addClass("sticky");
//       }else{
//           $('.navbar').removeClass("sticky");
//       }
      
//       // scroll-up button show/hide script
//       if(this.scrollY > 500){
//           $('.scroll-up-btn').addClass("show");
//       }else{
//           $('.scroll-up-btn').removeClass("show");
//       }
//   });

//   // slide-up script
//   $('.scroll-up-btn').click(function(){
//       $('html').animate({scrollTop: 0});
//       // removing smooth scroll on slide-up button click
//       $('html').css("scrollBehavior", "auto");
//   });

//   $('.navbar .menu li a').click(function(){
//       // applying again smooth scroll on menu items click
//       $('html').css("scrollBehavior", "smooth");
//   });

//   // toggle menu/navbar script
//   $('.menu-btn').click(function(){
//       $('.navbar .menu').toggleClass("active");
//       $('.menu-btn i').toggleClass("active");
//   });

//   // typing text animation script
//   var typed = new Typed(".typing", {
//       strings: ["Products", "Fruits", "Vegetables"],
//       typeSpeed: 100,
//       backSpeed: 60,
//       loop: true
//   });
// });
