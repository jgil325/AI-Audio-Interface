import { useState } from "react";
import styled from "styled-components";
import { IoIosApps, IoMdMenu } from "react-icons/io";
import "../assets/logo.png";

// const CustomIcon = () => (
//   <IconContext.Provider value={{ size: "1.5em", color: "black" }}>
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
  z-index: 1000;
  max-width: 52px;
  gap: 10px;

  &.open {
    max-width: max-content;
  }
`;

const FabButton = styled.li`
  display: grid;
  place-items: center;
  margin: 8px 0;
  font-size: 28px;

  cursor: pointer;
  position: relative;

  img {
    width: 80px;
    height: 24px;
  }

  svg {
    display: none;
  }
`;

//  fill: white;
// background-image: url(../assets/logo.png);
// background-color: #590059;
// border-radius: 50%;

//box-shadow: 0 3px 6px lightgrey;

// svg {
//   display: none
//  }

const FabAction = styled.li`
  border-radius: 50%;
  background-color: #590059;
  box-shadow: 0 3px 6px #d7b4e0;
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
  //<a href="https://ibb.co/QJW9dh5"><img src="https://i.ibb.co/fX3MvZc/logo.png" alt="logo" border="0"></a>

  return (
    <Container
      className={open ? "open" : ""}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <FabButton>
        <img src="https://i.ibb.co/fX3MvZc/logo.png" alt="Navbar opener" />
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
