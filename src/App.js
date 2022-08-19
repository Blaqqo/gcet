import { Outlet } from "react-router-dom";

import { createGlobalStyle } from "styled-components";

import { ThemeContextWrapper } from "./contexts/theme";

const BaseStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }

  menu,
  ul {
    list-style: none;
  }

  a,
  abbr {
    text-decoration: none;
  }

  address {
    font-style: normal;
  }

  img {
    height: auto;
    max-width: 100%;
    object-fit: cover;
  }
`;

const App = () => {
  return (
    <div>
      <BaseStyles />
      <ThemeContextWrapper>
        <Outlet />
      </ThemeContextWrapper>
    </div>
  );
}

export default App;
