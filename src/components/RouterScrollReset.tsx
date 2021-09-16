import { useEffect } from "react";
import { useLocation } from "react-router-dom";
class RouterScrollProps {
  children?: JSX.Element | null;
}
function RouterScroll({ children = null }: RouterScrollProps) {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
}

export default RouterScroll;
