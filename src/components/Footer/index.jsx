import React from "react";

import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <ul>
        <li>
          <a href=";">Tesla © 2022</a>
        </li>
        <li>
          <a href=";">Privacy & Legal</a>
        </li>
        <li>
          <a href=";">Vehicle Recalls</a>
        </li>
        <li className="link">
          <a href=";">Contact</a>
        </li>
        <li>
          <a href=";">Careers</a>
        </li>
        <li>
          <a href=";">News</a>
        </li>
        <li className="link">
          <a href=";">Engage</a>
        </li>
        <li className="link">
          <a href=";">Locations</a>
        </li>
      </ul>
    </Container>
  );
}
