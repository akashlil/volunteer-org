import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import Event from "./pages/Event/Event";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Header from "./pages/Shireits/Header/Header";
import UserEventShow from "./pages/UserEventShow/UserEventShow";
import VolunteerRegister from "./pages/VolunteerRegister/VolunteerRegister";
import PriveateROute from "./PriveateRoute/PriveateROute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/usereventshow">
            <UserEventShow></UserEventShow>
          </Route>
          <PriveateROute exact path="/register/:titlename">
            <VolunteerRegister></VolunteerRegister>
          </PriveateROute>
          <PriveateROute exact path="/admin">
            <Event></Event>
          </PriveateROute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
