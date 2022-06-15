import styled, { keyframes } from "styled-components";

const animateDown = keyframes` 
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(5px);
  }
  60% {
    transform: translateY(3px);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 48px;
  }
  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Buttons = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DarkButton = styled.div`
  background-color: var(--black);
  height: 40px;
  width: 256px;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 0.75rem;
  cursor: pointer;
  margin: 8px;
  font-weight: 500;
`;

export const LightButton = styled(DarkButton)`
  background: var(--white);
  opacity: 0.85;
  color: var(--black);
`;

export const DownArrow = styled.img`
  margin-bottom: 5px;
  height: 40px;

  animation: ${animateDown} infinite 1.5s;
`;
