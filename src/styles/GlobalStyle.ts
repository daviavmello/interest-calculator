import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0 auto;
  padding: 0;
}
html {
  background: ${colors.primary};
h1 {
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  color: ${colors.light};
  margin: 0;
}

h3 {
  font-family: Arial, Helvetica, sans-serif;
  color: ${colors.light};
}

input {
  box-sizing: border-box;
  background: transparent;
  color: ${colors.secondary};
  border: 0;
  border-bottom: 1px solid ${colors.medium};
  padding: 0.5rem 0;
  font-size: 1rem;
  ::placeholder {
    color: ${colors.medium};
    text-transform: capitalize;
  }
  :focus {
    outline: none;
    border-bottom: 1px solid ${colors.secondary};
    transition: all 0.5s linear;
  }
}
}

 /* Small devices (phones, up to 767px) */
@media (max-width: 767px) {
    html {
      margin: 1rem;
    }
} 

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
    html {
      margin: 2rem;
    }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
    html {
      margin: 2rem 10vw;
    }
}
`;

export default GlobalStyle;
