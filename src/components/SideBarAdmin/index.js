import React, { memo, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import * as s from "./SideBarAdmin.styles";
import BgImage from "../../img/bgside.jpg";

// The smallest screen width allow full size sidebar
const widthWillCollapse = 824;

const SideBarAdmin = ({ memuItems = [] }) => {
  const sidebarstate = localStorage.getItem("sidebarstate");
  const location = useLocation();
  const firstRender = useRef(true);
  const UserAdmin = JSON.parse(localStorage.getItem("UserAdmin"));
  const [selected, setSelectedMenuItem] = useState(location.pathname);
  const [isSideBarOpen, setSideBarOpen] = useState(true);
  const [isTagClose, setTagClose] = useState(false);
  const [subMenuState, setSubMenuState] = useState({});

  // update of header state
  useEffect(() => {
    if (window.innerWidth < widthWillCollapse && firstRender.current) {
      setSideBarOpenState(false);
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
        setSideBarOpenState(false);
      if (window.innerWidth >= widthWillCollapse && !isSideBarOpen)
        setSideBarOpenState(true);
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
      return <s.SubMenuItem key={subIndex}>{i.name}</s.SubMenuItem>;
    });
    return (
      <s.ItemContainer key={index}>
        <Link to={item.to}>
          <s.MenuItem
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
              <s.SubMenuItemContainer isSideBarOpen={isSideBarOpen}>
                {subMenuJSX}
              </s.SubMenuItemContainer>
            </motion.nav>
          )}
        </AnimatePresence>
      </s.ItemContainer>
    );
  });

  const setSideBarOpenState = (state) => {
    if (sidebarstate !== state) localStorage.setItem("sidebarstate", state);
    setSideBarOpen(state);
  };

  const handleClickItemMenu = (to, index) => {
    setSelectedMenuItem(to);
    if (subMenuState.hasOwnProperty(index)) {
      const subMenuCopy = { ...subMenuState };
      subMenuCopy[index]["isOpen"] = !subMenuState[index]["isOpen"];
      setSubMenuState({ ...subMenuCopy });
    }
  };
  return (
    <s.Sideboard bgImage={BgImage} isSideBarOpen={isSideBarOpen}>
      <s.SidebarHeader>
        <s.UserLogo>
          <img
            src={`https://i.pravatar.cc/50?u=${UserAdmin.taiKhoan}`}
            alt="User logo"
          />
          <s.UserBox headerClose={isTagClose}>
            <b>{UserAdmin.hoTen}</b>
            <p>{UserAdmin.maLoaiNguoiDung}</p>
          </s.UserBox>
        </s.UserLogo>
      </s.SidebarHeader>
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
      <s.TogglerContainer
        onClick={() => {
          if (window.innerWidth < widthWillCollapse) return;
          setSideBarOpenState(!isSideBarOpen);
        }}
      >
        <s.Toggler />
      </s.TogglerContainer>
    </s.Sideboard>
  );
};

export default memo(SideBarAdmin);
