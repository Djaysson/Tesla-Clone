import React from "react";

import {
  Container,
  ItemText,
  ButtonsGroup,
  Buttons,
  DarkButton,
  LightButton,
  DownArrow,
} from "./styles";

export function Section() {
  return (
    <Container>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>
      <ButtonsGroup>
        <Buttons>
          <DarkButton>Custom Order</DarkButton>
          <LightButton>Existing Inventory</LightButton>
        </Buttons>
        <DownArrow src="/images/down-arrow.svg" />
      </ButtonsGroup>
    </Container>
  );
}
