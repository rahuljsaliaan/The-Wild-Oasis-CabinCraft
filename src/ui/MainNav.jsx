/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import styled from "styled-components";
import { Tooltip } from "react-tooltip";
import { useSideBar } from "../context/SideBarContext";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

//
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    /* padding: 1.2rem 2.4rem; */
    text-align: center;
    padding: 1.2rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  const { isOpen } = useSideBar();

  return (
    <>
      <nav>
        <NavList>
          <li data-tooltip-id="home">
            <StyledNavLink to="/dashboard">
              <HiOutlineHome />
              {isOpen && <span>Home</span>}
            </StyledNavLink>
          </li>

          <li data-tooltip-id="bookings">
            <StyledNavLink to="/bookings">
              <HiOutlineCalendarDays />
              {isOpen && <span>Bookings</span>}
            </StyledNavLink>
          </li>
          <li data-tooltip-id="cabins">
            <StyledNavLink to="/cabins">
              <HiOutlineHomeModern />
              {isOpen && <span>Cabins</span>}
            </StyledNavLink>
          </li>
          <li data-tooltip-id="users">
            <StyledNavLink to="/users">
              <HiOutlineUsers />
              {isOpen && <span>Users</span>}
            </StyledNavLink>
          </li>
          <li data-tooltip-id="settings">
            <StyledNavLink to="/settings">
              <HiOutlineCog6Tooth />
              {isOpen && <span>Settings</span>}
            </StyledNavLink>
          </li>
        </NavList>
      </nav>
      {isOpen || (
        <>
          <Tooltip
            id="home"
            style={{ backgroundColor: "var(--color-brand-500)" }}
            place="right"
            content="home"
          />
          <Tooltip
            id="bookings"
            style={{ backgroundColor: "var(--color-brand-500)" }}
            place="right"
            content="bookings"
          />
          <Tooltip
            id="cabins"
            style={{ backgroundColor: "var(--color-brand-500)" }}
            place="right"
            content="cabins"
          />
          <Tooltip
            id="users"
            style={{ backgroundColor: "var(--color-brand-500)" }}
            place="right"
            content="users"
          />
          <Tooltip
            id="settings"
            style={{ backgroundColor: "var(--color-brand-500)" }}
            place="right"
            content="settings"
          />
        </>
      )}
    </>
  );
}

export default MainNav;
