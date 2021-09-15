var initial_state = {
  nav: {
    open: false,
  },
};

export default function appReducer(state = initial_state, action: any) {
  switch (action.type) {
    case "SET_NAV":
      return {
        ...state,
        nav: { ...state.nav, ...action.nav },
      };

    default:
      return state;
  }
}
