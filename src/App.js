import { Outlet } from "react-router-dom";

import { createGlobalStyle } from "styled-components";

import { AppContextWrapper } from "./contexts/app";
import { ThemeContextWrapper } from "./contexts/theme";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faPhone, faChevronDown, faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';


library.add(faCartShopping, faPhone, faEnvelope, faChevronDown, faCaretRight, faCaretDown);

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


  @media (max-width: 800px) {
    html {
      font-size: 14px;
    }
  }
`;

const App = () => {
  return (
    <div>
      <BaseStyles />
      <AppContextWrapper>
        <ThemeContextWrapper>
          <Outlet />
        </ThemeContextWrapper>
      </AppContextWrapper>
    </div>
  );
}

export default App;
