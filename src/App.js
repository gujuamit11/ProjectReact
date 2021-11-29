import './App.css';


//import Home from"./components/home ";
import Home from "./components/home";
import Nav from "./components/nav";
import Login from "./components/login";
import Posts from "./components/posts"
import Register from "./components/register";
import Transaction from './components/transaction';
import PageNotFound from './components/pagenotfound';
import TransactionForm from './components/transactionForm';
import TransactionType from './components/transactionType';
import TransactionDate from './components/transactionDate';

import { Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        
        <Route exact path="/transaction" component={Transaction}/>
        <Route exact path="/addTrans/add" component={TransactionForm}/>
        <Route exact path="/transaction/transactionType/:transactionType"component={TransactionType}/>
        <Route exact path="/transaction/transactionDate/:transactionDate"component={TransactionDate}/>
        
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;