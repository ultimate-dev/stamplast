import { useEffect, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
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
  const { open } = useSelector((state: any) => state.appReducer.nav);

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
      <div
        className={
          "relative h-screen w-full transition-all ease-linear duration-200 transform" +
          (open ? " -translate-x-60" : " -translate-x-0")
        }
      >
        <Switch>
          {routes.map((route, key: number) => (
            <Route
              key={key}
              path={route.path}
              render={(props: any) => <route.page {...props} />}
              exact={route.exact}
            />
          ))}
        </Switch>
        <Footer />
      </div>
    </Fragment>
  );
};
export default App;
