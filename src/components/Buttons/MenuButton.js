import React from "react"

export default MenuButton = (props, index) => {
  const { item } = props
  return (
    <Link to={item.link} key={index}>
      <MenuItem title={item.title}>
        <img src={item.icon} alt={item.title} />
        {item.title}
      </MenuItem>
    </Link>
  )
}
