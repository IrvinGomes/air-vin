import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteChangeHandler: FC = () => {
  const location = useLocation();
  const setTitle = () => {
    const title = location.pathname.substring(1);
    if (title) {
      return title.charAt(0).toUpperCase() + title.slice(1);
    } else {
      return "Home";
    }
  };
  const handleRouteChange = () => {
    document.title = setTitle();
  };
  useEffect(() => {
    handleRouteChange();
  }, [location]);

  return null;
};

export default RouteChangeHandler;
