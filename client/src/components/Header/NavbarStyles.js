import styled from "styled-components";

const NavbarStyle = styled.div`
  display: flex;
  // justify-content: flex-end;

  > a {
    margin-top: 1.3vh;
    margin-left: 4vw;
    font-weight: normal;
    font-size: revert;
    text-decoration: none;
  }

  > a:hover {
    color: #96bcb7;
  }

  > a:active {
    color: blue;
  }

  > a:first-child {
    text-decoration: underline;
  }
`;


export { NavbarStyle };
