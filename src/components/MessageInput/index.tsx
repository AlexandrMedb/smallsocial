import React, { useRef, useCallback } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useDispatch } from "react-redux";

import { addNewMessageWithBot } from "../../store/Chat";

const theme = createTheme();

export function MessageInput(props: any) {
  const dispatch = useDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    interface UserEvent {
      value?: string;
      autofocus?: boolean;
    }
    let target: UserEvent & Element = event.currentTarget[0];

    if (target.value !== "") {
      dispatch(
        addNewMessageWithBot({
          chatID: props.currentChat,
          message: target.value,
        })
      );

      target.value = "";
      handleInputFocus();
    }
  };

  const textInput = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback(() => {
    if (textInput.current != null) {
      textInput.current.focus();
    }
  }, [textInput]);

  if (props.currentChat) {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="message"
              label="Input Message"
              name="message"
              autoFocus
              autoComplete="off"
              inputRef={textInput}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
  return <></>;
}
