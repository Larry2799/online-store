import React from "react";
import Router from "./components/Router";
import * as S from "./App.style";
import GlobalStyle from "./styles/GlobalStyles";
import Theme from "./styles/Theme";

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <S.App>
        <Router />
      </S.App>
    </Theme>
  );
}

export default App;
