import styled, { css } from "styled-components";

export const Sideboard = styled.div`
  color: ${(p) => p.colorPalette.fontColorSelected};
  position: relative;
  box-shadow: 0 0 15px rgb(0 0 0 / 30%);
  width: ${(p) => (p.isSideBarOpen ? "20%" : "5%")};
  max-width: 280px;
  min-width: 80px;
  background-image: linear-gradient(
      315deg,
      ${(p) => p.colorPalette.bgColor1} 0%,
      ${(p) => p.colorPalette.bgColor2} 74%
    ),
    url(${(p) => p.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transition: 0.2s ease-in all;
`;

export const SidebarHeader = styled.div`
  padding: 20px 0;
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: 3px;
  margin-top: 20px;
`;

export const UserLogo = styled.div`
  display: inline-block;
  &::after {
    content: "";
    display: table;
    clear: both;
  }
  img {
    float: left;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const UserBox = styled.div`
  margin-top: 2px;
  margin-left: 10px;
  color: #fff;
  display: inline-block;
  transition: 0.2s ease-in all;
  p {
    margin: 0;
    white-space: nowrap;
  }
  ${(p) =>
    p.headerClose &&
    css`
      display: none;
    `};
`;

export const MenuItemContainer = styled.div`
  margin-top: 30px;
`;
export const ItemContainer = styled.div`
  margin-top: 10px;
`;

export const MenuItem = styled.div`
  cursor: ${(p) => (p.isSelected && !p.hasSubMenu ? "default" : "pointer")};
  position: relative;
  padding: 6px 20px;
  font-weight: 600;
  white-space: nowrap;
  color: ${(p) =>
    p.isSelected ? p.colorPalette.fontColorSelected : p.colorPalette.fontColor};
  transition: 0.1s ease-in all;
  ${(p) =>
    p.isSelected &&
    !p.isSideBarOpen &&
    css`
      background-color: ${p.colorPalette.selectedBackgroundCollapsedMode ===
      "dark"
        ? "rgba(0,0,0,0.6)"
        : "rgba(255,255,255,0.6)"};
    `};
  &:hover {
    color: ${(p) => p.colorPalette.fontColorSelected};
    transition: 0.1s ease-in all;
  }
  &::after {
    content: "";
    border: 1px solid
      ${(p) =>
        p.isSelected
          ? p.colorPalette.fontColorSelected
          : p.colorPalette.dividerColor};
    display: ${(p) =>
      p.isSideBarOpen && p.isSelected && p.isOpen ? "none" : "block"};
    margin: 8px 0 4px;
  }
  ${(p) =>
    !p.isSelected &&
    css`
      &:hover {
        &::after {
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: 0.1s ease-in all;
        }
      }
    `}
`;

export const Text = styled.p`
  display: ${(p) => (!p.isTagClose ? "inline" : "none")};
`;

export const Icon = styled.div`
  color: #fff;
  display: inline-block;
  padding: ${(p) => (p.isTagClose ? 0 : "0 16px 0 0")};
  margin: ${(p) => (p.isTagClose ? "0 0 0 12px" : "0 20px 0 0")};
  transition: 0.2s ease-in all;
  height: 16px;
  width: 16px;
`;

// submenu --------------------------------------------
export const SubMenuItemContainer = styled.div`
  font-size: 14px;
  margin-top: 10px;
  ${(p) =>
    p.isSideBarOpen
      ? css`
          padding-left: 20%;
        `
      : css`
          text-align: center;
        `};
`;

export const SubMenuItem = styled.p`
  color: ${(p) =>
    p.selected ? p.colorPalette.fontColorSelected : p.colorPalette.fontColor};
  ${(p) =>
    p.selected &&
    css`
      letter-spacing: 1.5px;
      font-weight: bold;
    `}
  cursor: pointer;
  &:hover {
    color: ${(p) => p.colorPalette.fontColorSelected};
  }
`;

// dropdown icon -------------------------------------
export const DropdownIcon = styled.span`
  position: absolute;
  top: ${(p) => (p.isOpen ? "9px" : "13px")};
  border: solid
    ${(p) =>
      p.isSelected
        ? p.colorPalette.fontColorSelected
        : p.colorPalette.fontColor};
  border-width: 0 1px 1px 0;
  padding: 3px;
  transform: ${(p) => (p.isOpen ? "rotate(45deg)" : "rotate(225deg)")};
  transition: 0.2s ease-in all;
  right: 24px;
  display: ${(p) => (p.isSideBarOpen ? "block" : "none")};
`;

// Toggler -----------------------------------------

export const TogglerContainer = styled.div`
  position: absolute;
  width: 30%;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Toggler = styled.div`
  height: 40px;
  cursor: pointer;
  position: relative;
  &::after {
    content: "";
    left: 0;
    top: 0.25em;
    width: 100%;
    height: 0.1em;
    position: absolute;
    background: #fff;
    box-shadow: 0 0.75em 0 0 #fff, 0 1.5em 0 0 #fff;
  }
`;
