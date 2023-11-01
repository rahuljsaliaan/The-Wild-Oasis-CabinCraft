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

  ${(props) => props.isOpen || "height: 4rem"}
`;

function Logo({ isOpen }) {
  const { isDarkMode } = useDarkMode();

  const imageSrc = isOpen
    ? isDarkMode
      ? "logo-dark.png"
      : "logo-light.png"
    : "logo.png";

  return (
    <StyledLogo>
      <Img src={imageSrc} alt="Logo" isOpen={isOpen} />
    </StyledLogo>
  );
}

export default Logo;
