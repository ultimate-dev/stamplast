import store from "../store";

/**/
var SET_NAV = "SET_NAV";
/**/

export function setNav(nav: any) {
  store.dispatch({
    type: SET_NAV,
    nav,
  });
}
