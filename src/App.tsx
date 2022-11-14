import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";

import StyledButton, {
  StyledLayout,
  StyledRoundButton,
} from "./components/StyledButton";

function App() {
  const lightTheme = {
    value: "light",
    style: {
      backgroundColor: "#ffffff",
      color: "#343a40",
    },
  };

  const darkTheme = {
    value: "dark",
    style: {
      backgroundColor: "#343a40",
      color: "#ffffff",
    },
  };

  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme(theme.value === "light" ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <div className="App">
          <header className="App-header">
            <h1>REACT-TS With "Styled Component!"</h1>
            <StyledButton onClick={toggleTheme} variant={"primary"}>
              SetTheme!
            </StyledButton>
            <StyledButton variant={"secondary"}>Click!</StyledButton>
          </header>
        </div>
      </StyledLayout>
    </ThemeProvider>
  );
}

export default App;
