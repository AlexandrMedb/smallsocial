import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

import { Link } from "react-router-dom";

import { reduceChatsPath } from "../../route/pathReducers";

import { removeChat } from "../../app/slicers/MessageList";
import { useAppDispatch } from "../../app/hooks";

const drawerWidth = 240;

export default function SideNavBar(props: {
  ChatTitles: Array<string>;
  ChatIDs: Array<string>;
}) {
  const chatsArray = props.ChatTitles;
  const chatsIDArray = props.ChatIDs;
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {chatsArray.map((text, index) => (
            <>
              <ListItem
                button
                key={text}
                component={Link}
                to={`${reduceChatsPath()}/${chatsIDArray[index]}`}
              >
                <ListItemText primary={text} />
              </ListItem>
              <button
                type="button"
                onClick={() => {
                  dispatch(removeChat(chatsIDArray[index]));
                }}
              >
                Удалить чат {text}{" "}
              </button>
            </>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
