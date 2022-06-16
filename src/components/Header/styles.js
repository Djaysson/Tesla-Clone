import styled from "styled-components";
import { FaBars } from "react-icons/fa";
export const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

export const CarsNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;

    li {
      font-size: 0.875rem;
      line-height: 20px;
      font-weight: 500;
      text-transform: uppercase;
      flex-wrap: nowrap;

      & + li {
        margin-left: 0.8rem;
      }

      a {
        text-decoration: none;
        color: var(--black);
        padding: 7px;
        transition: background-color 0.2s;
        &:hover {
          background-color: hsla(0, 0%, 0%, 0.05);

          border-radius: 10px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;

    li {
      font-size: 0.875rem;
      line-height: 20px;
      font-weight: 500;
      text-transform: uppercase;
      flex-wrap: nowrap;

      & + li {
        margin-left: 0.8rem;
      }

      a {
        text-decoration: none;
        color: var(--black);
        padding: 7px;
        transition: background-color 0.2s;
        &:hover {
          background-color: hsla(0, 0%, 0%, 0.05);

          border-radius: 10px;
        }
      }
    }
  }
`;

export const NavIcon = styled(FaBars)`
  font-size: 1.6rem;
  margin-left: 2rem;
  color: var(--black);
  cursor: pointer;
`;
