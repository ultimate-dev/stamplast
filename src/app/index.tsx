import { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// AOS
import AOS from "aos";
// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Moment
import moment from "moment";
import "moment/locale/tr";
import "moment/locale/en-gb";
// Source
import routes from "../source/routes";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 1000,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    moment.locale("tr");
  });

  return (
    <Fragment>
      <Navbar />
      <Router>
        <Switch>
          {routes.map((route, key: number) => (
            <Route
              key={key}
              render={(props: any) => <route.page {...props} />}
            />
          ))}
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  );
};
export default App;
