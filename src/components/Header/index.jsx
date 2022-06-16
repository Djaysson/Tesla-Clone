import React from "react";
import { Container, CarsNavBar, NavBar, NavIcon } from "./styles";
export function Header() {
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
        <NavIcon />
      </NavBar>
    </Container>
  );
}
