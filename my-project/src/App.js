import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";
import TablePage from "./TablePage";
import EditTaskPage from "./EditTaskPage";


const App = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <Router>
      <nav>
        <ul>
          {isLoggedIn ? (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/dashboard">
          {isLoggedIn ? <DashboardPage /> : <LoginPage />}
        </Route>
        <Route path="/table">
  <TablePage />
</Route>
<Route path="/tasks">
  <TablePage />
</Route>
<Route path="/tasks/:id/edit">
  <EditTaskPage />
</Route>
      </Switch>
    </Router>
  );
};

export default App;