/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const SideBarContext = createContext();

function SideBarProvider({ children }) {
  const [isOpen, setIsOpen] = useLocalStorageState(true, "sideBarIsOpen");

  return (
    <SideBarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SideBarContext.Provider>
  );
}

function useSideBar() {
  const context = useContext(SideBarContext);

  if (!context)
    throw new Error("SideBar context was used outside the SideBarProvider");

  return context;
}

export { SideBarProvider, useSideBar };
