import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <h2>
        © Made by
        <a href="https://github.com/EzLeezy"> EzLeezy 👽 </a>
      </h2>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  bottom: 0;
  width: 100%;
  background-color: #feda4a;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 0.7rem;
  padding: 1rem 0;
  flex: 0;
  position: fixed;
  align-items: center;
  height: 3vw;

  h2 {
    font-family: "Staatliches", cursive;
  }

  a {
    text-decoration: none;
    color: rgb(80, 80, 80);
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #3f72af;
    }
  }
`;

export default Footer;
