import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Hooks
import useQuery from "../hooks/useQuery";

class RouterScrollProps {
  children?: JSX.Element | null;
}
function RouterScroll({ children = null }: RouterScrollProps) {
  let location = useLocation();

  let query = useQuery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, query]);

  return children;
}

export default RouterScroll;
