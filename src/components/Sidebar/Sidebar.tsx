import { FC } from "react";
import { SidebarProps } from "./Sidebar.type";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import HomeIcon from "@mui/icons-material/Home";
import CropFreeIcon from "@mui/icons-material/CropFree";
import InfoIcon from "@mui/icons-material/Info";

export const Sidebar: FC<SidebarProps> = ({ isOpen, listOfItems }) => {
  const handleClick = (item: string) => {
    document.location.href = item;
    console.log(item);
  };
  const setListOfItems = () => {
    return listOfItems.map((item: string) => {
      return (
        <ListItem key={item} disablePadding onClick={() => handleClick(item)}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: isOpen ? "initial" : "center",
              px: 2.5,
            }}
          >
            {isOpen ? null : (
              <ListItemText primary={item} sx={{ opacity: 0 }} />
            )}
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: isOpen ? 3 : "auto",
                ml: isOpen ? "auto" : 3,
                justifyContent: "center",
              }}
            >
              {setIcon(item)}
            </ListItemIcon>
            {isOpen ? (
              <ListItemText primary={item} sx={{ opacity: isOpen ? 1 : 0 }} />
            ) : null}
          </ListItemButton>
        </ListItem>
      );
    });
  };

  const setIcon = (item: string) => {
    switch (item) {
      case "Home":
        return <HomeIcon />;
      case "IFrame":
        return <CropFreeIcon />;
      case "About":
        return <InfoIcon />;
      default:
        return <QuestionMarkIcon />;
    }
  };

  return (
    <Box
      sx={{
        marginLeft: isOpen ? 0 : "-80px",
        transitionDuration: "0.5s",
        paddingLeft: isOpen ? "10px" : "15px",
      }}
    >
      <List disablePadding>{setListOfItems()}</List>
    </Box>
  );
};
