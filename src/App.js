import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./routes";
import { useStyles } from "./Styles";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.appRoot}>
      <Router>
        <Navigation />
        <div>
          <div className={classes.appBarSpacer} />
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route exact key={index} path={route.path}>
                  {route.component}
                </Route>
              );
            })}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
