import React,{Component} from 'react';
import { BrowserRouter , Route , Switch} from "react-router-dom";

import Login from "./components/login";
import Welcome from "./components/welcome";

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Switch>  
          <Route exact path="/" component={Login} />
          <Route exact path="/welcome/:username" component={Welcome} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
