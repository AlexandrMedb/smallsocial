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

import { removeChat } from "../../store/Chat";
import { useDispatch } from "react-redux";

const drawerWidth = 240;

export function SideNavBar(props: {
  ChatTitles: Array<string>;
  ChatIDs: Array<string>;
}) {
  let chatsArray: any = [];
  if (props.ChatTitles) {
    chatsArray = props.ChatTitles;
  }

  let chatsIDArray: any = [];
  if (props.ChatTitles) {
    chatsIDArray = props.ChatIDs;
  }

  const dispatch = useDispatch();

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
          {chatsArray.map((text: any, index: any) => (
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
