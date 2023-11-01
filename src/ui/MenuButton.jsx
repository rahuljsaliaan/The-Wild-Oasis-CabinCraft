/* eslint-disable react/prop-types */

import styled, { css } from "styled-components";

const size = {
  small: css`
    font-size: 1rem;
  `,
  medium: css`
    font-size: 2rem;
  `,
  large: css`
    font-size: 3rem;
  `,
};

const StyledMenuButton = styled.button`
  color: var(--color-grey-900);
  background-color: transparent;
  outline: none;
  border: none;
  display: inline;
  align-self: flex-end;
  padding: 0.25rem;
  border-radius: var(--border-radius-sm);

  &:focus {
    outline: none;
    border: none;
  }

  &:hover {
    box-shadow: var(--shadow-lg);
  }

  ${(props) => size[props.size]}
`;

StyledMenuButton.defaultProps = {
  size: "medium",
};

function MenuButton({ icon, size, align, onClick, children }) {
  return (
    <StyledMenuButton onClick={onClick} align={align} size={size}>
      {icon} {children}
    </StyledMenuButton>
  );
}

export default MenuButton;
