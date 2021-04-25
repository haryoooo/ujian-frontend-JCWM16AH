import NavbarComponent from "./Components/NavbarComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./store";
import Cart from "./pages/Cart";
import Histories from "./pages/Histories";
import LoginForm from "./Components/LoginComponents/LoginForm";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <NavbarComponent />

          <Switch>
            <Route exact path ="/">
              <Home />
            </Route>
            <Route exact path ="/cart">
              <Cart />
            </Route>
            <Route exact path="/histories">
              <Histories />
            </Route>
            <Route exact path="/LoginForm">
              <LoginForm />
            </Route>
          </Switch>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
