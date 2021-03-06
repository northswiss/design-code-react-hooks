import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function MenuButton(props, index) {
  const { item } = props
  return (
    /* When working with custom components, you have to be careful with onClick 
      events and ensure that the event is passed down to the component. 
      Try to remove it from Link and you will see it will no longer work */
    <Link to={item.link} onClick={props.onClick}>
      <MenuItem title={item.title}>
        <img src={item.icon} alt={item.title} />
        {item.title}
      </MenuItem>
    </Link>
  )
}

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: ${(props) => props.title && "10px"};
  align-items: center;
  padding: 10px;
  transition: 0.5s ease-out;
  border-radius: 10px;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`
