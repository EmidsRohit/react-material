import React from "react";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

export default function LeftPanel(props) {
  const { menus, activeMenu, onChangeMenu } = props;
  return (
    <MenuList>
      {menus.map(item => (
        <MenuItem
          key={item.name}
          className={activeMenu === item.name ? "active" : ""}
          onClick={() => onChangeMenu(item.name)}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          {item.name}
        </MenuItem>
      ))}
    </MenuList>
  );
}
LeftPanel.defaultProps = {
  activeMenu: "Endpoints",
  onChangeMenu: () => {}
};
