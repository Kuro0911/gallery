import styled from "styled-components";
export const HeaderWrapper = styled.div`
  display: flex;
  margin-top: 5%;
  justify-content: space-around;
  h1 {
    color: #0070f3;
    font-family: ui-serif;
    font-size: xxx-large;
  }
  h1:hover,
  h1:focus,
  h1:active {
    text-decoration: underline;
    cursor: pointer;
  }
  .Button {
    max-height: 38px;
    margin-top: 2em;
  }
`;
