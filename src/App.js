import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Component/Home/Home';
import HeaderNav from "../src/Component/Header/HeaderNav"
import Footer from "../src/Component/Footer/Footer"
import Inforgraph from "./Component/InfoGraph/Inforgraph"
import About from "./Component/About/About"


function App() {
  return (
    <>
      <Router>
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/infograph" component={Inforgraph} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
