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
import { AuthenticatedOnly } from "./AuthenticatedOnly";
import { AnonymousOnly } from "./AnonymousOnly";
import { NotFound } from "./NotFound";

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
              <Route
                index
                element={
                  <AnonymousOnly>
                    <Home />
                  </AnonymousOnly>
                }
              />
              <Route
                path="/login"
                element={
                  <AnonymousOnly>
                    <LoginForm />
                  </AnonymousOnly>
                }
              />
              <Route
                path="/signup"
                element={
                  <AnonymousOnly>
                    <SignupForm />
                  </AnonymousOnly>
                }
              />
              <Route
                path="/create"
                element={
                  <AuthenticatedOnly>
                    <CreateNote />
                  </AuthenticatedOnly>
                }
              />
              <Route
                path="/notes"
                element={
                  <AuthenticatedOnly>
                    <Notes />
                  </AuthenticatedOnly>
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <AuthenticatedOnly>
                    <EditNote />
                  </AuthenticatedOnly>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
};
