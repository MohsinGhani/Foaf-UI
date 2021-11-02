import React from "react";
import { Menu, Dropdown } from "antd";
export default function DropDown({ text, type }) {
  const menu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item </Menu.Item>
      <Menu.Item>3rd menu item </Menu.Item>
      <Menu.Item>a danger item</Menu.Item>
    </Menu>
  );
  return (
    <div className={`Drop ${type && "filter"}`}>
      <Dropdown overlay={menu}>
        <p>
          {text}{" "}
          <span>
            <svg
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.52532 1.79954L5.25791 6.03206L1.02539 1.76465"
                stroke="#010010"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </p>
      </Dropdown>
    </div>
  );
}
