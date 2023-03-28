import { useState } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import { IoIosApps, IoMdMenu } from "react-icons/io";
import logo from "../assets/logo-draft.png";
import { IconContext } from "react-icons";

// const CustomIcon = () => (
//   <IconContext.Provider value={{ size: "1.5em", color: "white" }}>
//     <svg viewBox="0 0 24 24">
//       <path d="M12 2L3 15h18z" />
//     </svg>
//   </IconContext.Provider>
// );

const Container = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-direction: row;
  position: fixed;
  left: 2em;
  top: 2em;
  max-width: 52px;
  gap: 10px;

  &.open {
    max-width: max-content;
  }
`;

const FabButton = styled.li`
  border-radius: 50%;
  box-shadow: 0 3px 6px lightgrey;
  display: grid;
  place-items: center;
  margin: 8px 0;
  font-size: 28px;
  padding: 12px;
  cursor: pointer;
  position: relative;
  background-color: #00a8ff;

  svg {
    fill: white;
  }
`;

const FabAction = styled.li`
  border-radius: 50%;
  box-shadow: 0 3px 6px lightgrey;
  display: grid;
  place-items: center;
  margin: 8px 0;
  font-size: 28px;
  padding: 12px;
  cursor: pointer;
  position: relative;
  transform: translateY(50px) scale(0);
  transition: transform 300ms, opacity 300ms;
  opacity: 0;

  &:hover .tooltip {
    transform: translateY(-100%) scale(1);
    opacity: 1;
  }

  &.open {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  .tooltip {
    padding: 4px 6px;
    font-size: 12px;
    position: absolute;
    left: -12px;
    transform: translateY(-75%);
    background-color: #353b48;
    border-radius: 4px;
    color: white;
    opacity: 0;
    transition: transform 300ms, opacity 300ms;
    user-select: none;
  }
`;

interface FABAction {
  label: string;
  icon: JSX.Element;
  onClick: () => void;
}

interface FABProps {
  actions: FABAction[];
}

const Fab = ({ actions }: FABProps) => {
  const [open, setOpen] = useState(false);

  const mouseEnter = () => setOpen(true);

  const mouseLeave = () => setOpen(false);

  return (
    <Container
      className={open ? "open" : ""}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <FabButton>
        <IoMdMenu />
        {/* <CustomIcon /> */}
      </FabButton>
      {actions.map((action, index) => (
        <FabAction
          style={{ transitionDelay: `${index * 25}ms` }}
          className={open ? "open" : ""}
          key={action.label}
          onClick={action.onClick}
        >
          {action.icon}
          <span className="tooltip">{action.label}</span>
        </FabAction>
      ))}
    </Container>
  );
};

export default Fab;
