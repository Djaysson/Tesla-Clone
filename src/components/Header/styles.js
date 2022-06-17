import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
export const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
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
      font-size: 1rem;
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
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
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
      font-size: 1rem;
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

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    ul {
      display: none;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    ul {
      display: none;
    }
  }
`;

export const OpenNav = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  line-height: 20px;
  padding: 7px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    border-radius: 10px;
    background-color: hsla(0, 0%, 0%, 0.05);
  }

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    border-radius: 10px;
    background-color: #cfd7df;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    border-radius: 10px;
    background-color: #cfd7df;
  }
`;
export const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const CloseNavIcon = styled(MdClose)`
  font-size: 2rem;
  margin: 1rem 2rem;
  color: var(--black);
  cursor: pointer;
  &:hover {
    border-radius: 10px;
    background-color: hsla(0, 0%, 0%, 0.05);
  }
`;
export const MobileNavBar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  &::-webkit-scrollbar {
    z-index: 1;
  }
  right: 0;
  background-color: var(--white-02);
  width: 20rem;
  z-index: 10;
  transition: transform 0.2s;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 20px;

    li {
      font-size: 1rem;
      line-height: 20px;
      font-weight: 600;
      width: 100%;
      padding: 15px;
      cursor: pointer;

      &:hover {
        border-radius: 10px;
        background-color: hsla(0, 0%, 0%, 0.05);
      }
      a {
        text-decoration: none;
        opacity: 0.9;
        color: var(--black);
      }
      &.link {
        display: none;
        @media only screen and (max-width: 1024px) {
          display: flex;
        }
      }
    }
  }
`;

export const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 8px;
  margin-bottom: 50px;
  &:hover {
    border-radius: 10px;
    background-color: hsla(0, 0%, 0%, 0.05);
  }
  div {
    display: flex;
    margin-left: 0.7rem;
    flex-direction: column;
    cursor: pointer;
    strong {
      font-weight: 600;
      font-size: 1rem;
    }
    span {
      font-weight: 500;
      font-size: 0.875rem;
      opacity: 0.68;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
export const LanguageIcon = styled(TbWorld)`
  font-size: 1.5rem;
  margin-top: -15px;
  margin-left: 2rem;
  color: var(--black);
`;
