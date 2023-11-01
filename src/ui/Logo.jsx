/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;

  ${(props) => props.status === "close" && "height: 4rem"}
`;

function Logo({ isOpen }) {
  const { isDarkMode } = useDarkMode();

  const imageSrc = isOpen
    ? isDarkMode
      ? "/public/logo-dark.png"
      : "/public/logo-light.png"
    : "/public/logo.png";

  return (
    <StyledLogo>
      <Img src={imageSrc} alt="Logo" status={isOpen ? "open" : "close"} />
    </StyledLogo>
  );
}

export default Logo;
