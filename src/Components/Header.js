import styled from "styled-components";
import mountain from "../Assets/mountain.png";

function Header() {
  return (
    <>
      <HeaderContainer>
        <H1>Higher</H1>
        <Img src={mountain} alt="logo" />
        <H1>Ground</H1>
      </HeaderContainer>
    </>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  background-color: #feda4a;
  max-height: 10vw;
  width: 100%;
  height: 100%;
  font-family: "Staatliches", cursive;
  padding-left: 43%;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
`;

const H1 = styled.h1``;

const Img = styled.img`
  height: 4.3rem;
`;
