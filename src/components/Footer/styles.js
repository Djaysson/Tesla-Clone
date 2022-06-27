import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 0 30px;
  flex-wrap: wrap;
  bottom: 0;
  left: 0;
  right: 0;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;

    li {
      & + li {
        margin-left: 1rem;
      }
      a {
        text-decoration: none;
        font-size: 0.875rem;
        color: var(--black);
        opacity: 0.65;
        font-weight: 600;
      }
      &.link {
        @media only screen and (max-width: 600px) {
          display: none;
        }
      }
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    height: auto;

    padding: 50px 0;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      li {
        & + li {
          margin: 0.7rem;
        }
      }
    }
  }
`;
