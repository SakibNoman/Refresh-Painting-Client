import { createContext, useState } from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Book from "./Components/Dashboard/Book/Book";
import BookingList from "./Components/Dashboard/BookingList/BookingList";
import Review from "./Components/Dashboard/Review/Review";
import About from "./Components/Home/About/About";
import Home from "./Components/Home/Home/Home";
import Projects from "./Components/Home/Projects/Projects";
import Services from "./Components/Home/Services/Services";
import Login from "./Components/Login/Login";
import Footer from "./Components/Shared/Footer/Footer";
import TopBar from "./Components/Shared/TopBar/TopBar";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
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
          <Route path="/dashboard/book" >
            <Book></Book>
          </Route>
          <Route path="/dashboard/bookingList" >
            <BookingList></BookingList>
          </Route>
          <Route path="/dashboard/review" >
            <Review></Review>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
