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
import Fade from "react-reveal/Fade";

export function Section({
  title,
  description,
  backgroundImg,
  darkBtnText,
  lightBtnText,
  icon,
}) {
  return (
    <Container bgImg={backgroundImg}>
      <Fade bottom mirror>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <ButtonsGroup>
        <Fade bottom>
          <Buttons>
            <DarkButton>{darkBtnText}</DarkButton>
            {lightBtnText && <LightButton>{lightBtnText}</LightButton>}
          </Buttons>
        </Fade>
        <DownArrow src={icon} />
      </ButtonsGroup>
    </Container>
  );
}
