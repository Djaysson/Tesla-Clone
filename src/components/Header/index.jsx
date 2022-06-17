import React, { useState } from "react";
import {
  Container,
  CarsNavBar,
  NavBar,
  OpenNav,
  MobileNavBar,
  CloseContainer,
  CloseNavIcon,
  LanguageContainer,
  LanguageIcon,
} from "./styles";
export function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <Container>
      <a href=";">
        <img src="/images/logo.svg" alt="Tesla brand logo" />
      </a>
      <CarsNavBar>
        <ul>
          <li>
            <a href=";">Model S</a>
          </li>
          <li>
            <a href=";">Model 3</a>
          </li>
          <li>
            <a href=";">Model X</a>
          </li>
          <li>
            <a href=";">Model Y</a>
          </li>
          <li>
            <a href=";">Solar roof</a>
          </li>
          <li>
            <a href=";">Solar panels</a>
          </li>
        </ul>
      </CarsNavBar>
      <NavBar>
        <ul>
          <li>
            <a href=";">Shop</a>
          </li>
          <li>
            <a href=";">Tesla Account</a>
          </li>
        </ul>
        <OpenNav onClick={() => setNavbarOpen(true)}>Menu</OpenNav>
      </NavBar>

      <MobileNavBar show={navbarOpen}>
        <CloseContainer>
          <CloseNavIcon onClick={() => setNavbarOpen(false)} />
        </CloseContainer>
        <ul onClick={() => setNavbarOpen(false)}>
          <li className="link">
            <a href=";">Model S</a>
          </li>
          <li className="link">
            <a href=";">Model 3</a>
          </li>
          <li className="link">
            <a href=";">Model X</a>
          </li>
          <li className="link">
            <a href=";">Model Y</a>
          </li>
          <li className="link">
            <a href=";">Solar roof</a>
          </li>
          <li className="link">
            <a href=";">Solar panels</a>
          </li>
          <li>
            <a href=";">Existing Inventory</a>
          </li>
          <li>
            <a href=";">Used Inventory </a>
          </li>
          <li>
            <a href=";">Trade-In </a>
          </li>
          <li>
            <a href=";">Test Drive </a>
          </li>
          <li>
            <a href=";">Insurance </a>
          </li>
          <li>
            <a href=";">Cybertruck </a>
          </li>
          <li>
            <a href=";">Roadster </a>
          </li>
          <li>
            <a href=";">Semi </a>
          </li>
          <li>
            <a href=";">Charging </a>
          </li>
          <li>
            <a href=";">Powerwall </a>
          </li>
          <li>
            <a href=";">Commercial Energy </a>
          </li>
          <li>
            <a href=";">Utilities </a>
          </li>
          <li>
            <a href=";">Find Us </a>
          </li>
          <li>
            <a href=";">Support </a>
          </li>
          <li>
            <a href=";">Investor Relations</a>
          </li>
          <li className="link">
            <a href=";">Shop</a>
          </li>
          <li className="link">
            <a href=";">Tesla Account</a>
          </li>
        </ul>
        <LanguageContainer>
          <LanguageIcon />
          <div>
            <strong>United States</strong>
            <span>English</span>
          </div>
        </LanguageContainer>
      </MobileNavBar>
    </Container>
  );
}
