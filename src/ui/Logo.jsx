/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;

  ${(props) => props.status === "close" && "height: 4rem"}
`;

const LogoTitle = styled.h1`
  font-family: "Sono";
  font-size: 2rem;
  font-weight: 500;
`;

function Logo({ isOpen }) {
  const { isDarkMode } = useDarkMode();

  const imageSrc = isOpen
    ? isDarkMode
      ? "/logo-dark.png"
      : "/logo-light.png"
    : "/logo.png";

  return (
    <StyledLogo>
      <Img src={imageSrc} alt="Logo" status={isOpen ? "open" : "close"} />
      <LogoTitle>Home Seekers</LogoTitle>
    </StyledLogo>
  );
}

export default Logo;
