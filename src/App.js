import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import About from "./Components/Home/About/About";
import Home from "./Components/Home/Home/Home";
import Projects from "./Components/Home/Projects/Projects";
import Services from "./Components/Home/Services/Services";
import Login from "./Components/Login/Login";
import Footer from "./Components/Shared/Footer/Footer";
import TopBar from "./Components/Shared/TopBar/TopBar";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home></Home>
        </Route>
        <Route path="/login" >
          <TopBar></TopBar>
          <Login></Login>
          <Footer></Footer>
        </Route>
        <Route path="/about" >
          <TopBar></TopBar>
          <About></About>
          <Footer></Footer>
        </Route>
        <Route path="/services" >
          <TopBar></TopBar>
          <Services></Services>
          <Footer></Footer>
        </Route>
        <Route path="/projects" >
          <TopBar></TopBar>
          <Projects></Projects>
          <Footer></Footer>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
