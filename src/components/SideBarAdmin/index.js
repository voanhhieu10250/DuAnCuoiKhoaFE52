import React, { memo, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as s from "./SideBarAdmin.styles";
import BgImage from "../../img/bgside.jpg";

// The smallest screen width allow full size sidebar
const widthWillCollapse = 824;

const SideBarAdmin = ({ memuItems = [], colorPalette }) => {
  const sidebarstate = JSON.parse(localStorage.getItem("sidebarstate"));
  const location = useLocation();
  const history = useHistory();
  const firstRender = useRef(true);
  const UserAdmin = JSON.parse(localStorage.getItem("UserAdmin"));
  const [selected, setSelectedMenuItem] = useState(location.pathname);
  const [isSideBarOpen, setSideBarOpen] = useState(sidebarstate);
  const [isTagClose, setTagClose] = useState(!sidebarstate);
  const [subMenuState, setSubMenuState] = useState({});

  // update of header state
  useEffect(() => {
    if (window.innerWidth < widthWillCollapse && firstRender.current) {
      setSideBarOpen(false);
      setTagClose(true);
    }
    if (!firstRender.current) {
      if (isSideBarOpen) setTimeout(() => setTagClose(false), [200]);
      else setTagClose(true);
    }
    firstRender.current = false;
  }, [isSideBarOpen]);

  // update of sidebar state
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < widthWillCollapse && isSideBarOpen)
        setSideBarOpen(false);
      if (window.innerWidth >= widthWillCollapse && !isSideBarOpen)
        setSideBarOpen(true);
    };
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, [isSideBarOpen]);

  // add index of items that contain sub menu items
  useEffect(() => {
    const newSubmenu = {};
    memuItems.forEach((item, index) => {
      const hasSubmenu = !!item.subMenuItem.length;
      if (hasSubmenu) {
        newSubmenu[index] = {};
        newSubmenu[index]["isOpen"] = false;
        newSubmenu[index]["selected"] = null;
      }
    });
    setSubMenuState(newSubmenu);
  }, [memuItems]);

  const menuItemsJSX = memuItems.map((item, index) => {
    const isSelected = selected === item.to;
    const hasSubMenu = !!item.subMenuItem.length; // if length > 0 this will return true, else will return false
    const isOpen = subMenuState[index]?.isOpen; // this will check whether in subMenuState[index] exists, then it will set isOpen to isOpen variable. Otherwise, it will be undefine
    const subMenuJSX = item.subMenuItem.map((i, subIndex) => {
      const isSubmenuItemSelected = subMenuState[index]?.selected === subIndex;
      return (
        <Link to={i.to} key={subIndex}>
          <s.SubMenuItem
            colorPalette={colorPalette}
            onClick={() => handleClickSubItem(index, subIndex)}
            selected={isSubmenuItemSelected}
          >
            {i.name}
          </s.SubMenuItem>
        </Link>
      );
    });
    return (
      <s.ItemContainer key={index}>
        <Link to={item.to}>
          <s.MenuItem
            colorPalette={colorPalette}
            isOpen={isOpen}
            hasSubMenu={hasSubMenu}
            isSelected={isSelected}
            isSideBarOpen={isSideBarOpen}
            onClick={() => handleClickItemMenu(item.to, index)}
          >
            <s.Icon isTagClose={isTagClose}>{item.icon}</s.Icon>
            <s.Text isTagClose={isTagClose}>{item.name}</s.Text>
            {hasSubMenu && (
              <s.DropdownIcon
                colorPalette={colorPalette}
                isSideBarOpen={isSideBarOpen}
                isSelected={isSelected}
                isOpen={isOpen}
              />
            )}
          </s.MenuItem>
        </Link>
        <AnimatePresence>
          {hasSubMenu && isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              exit={{ opacity: 0, x: -30 }}
            >
              <s.SubMenuItemContainer
                colorPalette={colorPalette}
                isSideBarOpen={isSideBarOpen}
              >
                {subMenuJSX}
              </s.SubMenuItemContainer>
            </motion.nav>
          )}
        </AnimatePresence>
      </s.ItemContainer>
    );
  });

  const handleClickItemMenu = (to, index) => {
    setSelectedMenuItem(to);
    const subMenuCopy = { ...subMenuState };
    if (subMenuState.hasOwnProperty(index)) {
      subMenuCopy[index]["isOpen"] = !subMenuState[index]["isOpen"];
      setSubMenuState({ ...subMenuCopy });
    } else {
      for (const item in subMenuState) {
        subMenuCopy[item]["isOpen"] = false;
        subMenuCopy[item]["selected"] = null;
      }
      setSubMenuState({ ...subMenuCopy });
    }
  };

  const handleClickSubItem = (menuItemIdx, subMenuItemIdx) => {
    const subMenuCopy = { ...subMenuState };
    if (subMenuCopy[menuItemIdx]["selected"] !== subMenuItemIdx)
      subMenuCopy[menuItemIdx]["selected"] = subMenuItemIdx;
    setSubMenuState({ ...subMenuCopy });
  };

  const handleLogout = () => {
    localStorage.removeItem("UserAdmin");
    localStorage.removeItem("UserAccount");
    localStorage.removeItem("sidebarstate");
    history.go("/auth");
  };

  return (
    <s.Sideboard
      bgImage={BgImage}
      isSideBarOpen={isSideBarOpen}
      colorPalette={colorPalette}
    >
      <s.SidebarHeader>
        <s.UserLogo>
          <img
            src={`https://i.pravatar.cc/50?u=${UserAdmin?.taiKhoan}`}
            alt="User logo"
          />
          <s.UserBox headerClose={isTagClose}>
            <b>{UserAdmin?.hoTen}</b>
            <p type="button" onClick={handleLogout}>
              Đăng xuất
            </p>
          </s.UserBox>
        </s.UserLogo>
      </s.SidebarHeader>
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
      <s.TogglerContainer
        onClick={() => {
          if (window.innerWidth < widthWillCollapse) return;
          localStorage.setItem("sidebarstate", JSON.stringify(!isSideBarOpen));
          setSideBarOpen(!isSideBarOpen);
        }}
      >
        <s.Toggler />
      </s.TogglerContainer>
    </s.Sideboard>
  );
};

export default memo(SideBarAdmin);

SideBarAdmin.defaultProps = {
  colorPalette: {
    bgColor1: "rgba(11, 171, 100, 0.8)",
    bgColor2: "rgba(59, 183, 143, 0.8)",
    fontColor: "rgba(22, 46, 39)",
    fontColorSelected: "rgba(255, 255, 255)",
    dividerColor: "rgba(122, 204, 178)",
    selectedBackgroundCollapsedMode: "light",
  },
};
