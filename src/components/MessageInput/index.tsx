import React, { useRef } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function MessageInput(props: any) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    interface UserEvent {
      value?: string;
      autofocus?: boolean;
    }
    let target: UserEvent & Element = event.currentTarget[0];

    if (target.value !== "") {
      props.handleSend(target.value);

      target.value = "";
      handleClick();
    }
  };

  const textInput = useRef(document.createElement("input"));

  function handleClick() {
    if (textInput.current !== null) {
      console.dir(textInput.current);

      textInput.current.focus();
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="message"
            label="Input Message"
            name="message"
            autoFocus
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
