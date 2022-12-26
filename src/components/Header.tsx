import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";

const _Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  border-bottom: 1px solid #dddddd;

  svg {
    height: 2rem;
  }
`;

function Header() {
  return (
    <_Header>
      <Logo />
    </_Header>
  );
}

export default Header;
