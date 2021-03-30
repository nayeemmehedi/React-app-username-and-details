import Header from './components1/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HeaderTop from './components1/HeaderTop/HeaderTop';
import NewHome from './components1/NewHome/NewHome';

function App() {
  return (
    <div>

      {/* <Happy></Happy> if else condition apply learn */}
      <HeaderTop></HeaderTop>
      

       <Router>

       <Switch>
          <Route exact path="/home">
            <Header></Header>
          </Route>
          <Route exact path="/">
            <Header></Header>
          </Route>
          <Route path="/product/:idTeam">
            <NewHome></NewHome>
          </Route>
          
        </Switch>
      
    </Router>
      
    </div>
  );
}

export default App;
