/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
import React from "react";

import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
