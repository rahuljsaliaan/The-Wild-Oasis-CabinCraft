import { useSideBar } from "../context/SideBarContext";
import { HiOutlineArrowLeft, HiOutlineBars3 } from "react-icons/hi2";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import MenuButton from "./MenuButton";
import Uploader from "../data/Uploader";

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;

  display: grid;
  grid-template-rows: auto 10rem 1fr;
  gap: 3.2rem;
  overflow-x: hidden;
`;

const MenuButtonContainer = styled.div`
  padding-right: 1.4rem;
  text-align: right;
`;

function SideBar() {
  const { isOpen, setIsOpen } = useSideBar();

  return (
    <StyledSideBar>
      <MenuButtonContainer>
        <MenuButton
          icon={isOpen ? <HiOutlineArrowLeft /> : <HiOutlineBars3 />}
          onClick={() => setIsOpen((open) => !open)}
        />
      </MenuButtonContainer>
      <Logo isOpen={isOpen} />
      <MainNav isOpen={isOpen} />
      <Uploader />
    </StyledSideBar>
  );
}

export default SideBar;
