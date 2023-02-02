import React from "react";
import Router from "./components/Router";
import { BrowserRouter } from "react-router-dom";
import * as S from "./App.style";

function App() {
  return (
    <BrowserRouter>
      <S.App>
        <Router />
      </S.App>
    </BrowserRouter>
  );
}

export default App;
