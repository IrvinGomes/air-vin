import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Box } from "@mui/material";
import { Footer } from "../Footer/Footer";
import RouteChangeHandler from "../../helpers/routeChangeHandler";
import useLocalStorage from "../../helpers/useLocalStorage";
import { Sidebar } from "../Sidebar/Sidebar";

export const Root: FC = () => {
  const [isOpen, setIsOpen] = useLocalStorage("isOpen", "");
	const listOfItems = ['Home', 'IFrame', 'About'];


  const toggleSidebar = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <Box display={"flex"} flexDirection={"row"} height={"100%"} width={"100%"}>
      <RouteChangeHandler />
      <Header toggleSidebar={toggleSidebar} />
      <Box
        component="main"
        flex="1 1 auto"
        mt={8}
        overflow="auto"
        display={"flex"}
        flexDirection={"column"}
      >
        <Box flexGrow={1} display={"flex"}>
          <Sidebar isOpen={isOpen} listOfItems={listOfItems} />
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};
