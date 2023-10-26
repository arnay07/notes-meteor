import React from "react";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import Header from "./Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home.jsx";
import LoginForm from "./LoginForm.jsx";
import SignupForm from "./SignupForm.jsx";
import CreateNote from "./CreateNote.jsx";
import Notes from "./Notes.jsx";
import EditNote from "./EditNote.jsx";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export const App = () => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/create" element={<CreateNote />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/edit/:id" element={<EditNote />} />
              <Route path="*" element={<h1>404</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
};
