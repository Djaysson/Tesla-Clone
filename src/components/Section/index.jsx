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

export function Section({
  title,
  description,
  backgroundImg,
  darkBtnText,
  lightBtnText,
}) {
  return (
    <Container bgImg={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <ButtonsGroup>
        <Buttons>
          <DarkButton>{darkBtnText}</DarkButton>
          {lightBtnText && <LightButton>{lightBtnText}</LightButton>}
        </Buttons>
        <DownArrow src="/images/down-arrow.svg" />
      </ButtonsGroup>
    </Container>
  );
}
