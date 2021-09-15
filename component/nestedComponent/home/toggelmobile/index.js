import { Menu } from "antd";

import ToggelSearch from "../../dashBoard/dashboardIcons/toggelSearch.js";
import ToggelHome from "../../dashBoard/dashboardIcons/toggelhomje.js";
export default function ToggelMobile() {
  return (
    <div className="mobile_toggel_wow">
      <Menu className="menu" mode="horizontal">
        <Menu.Item key="99" icon={<ToggelHome />}></Menu.Item>
        <Menu.Item key="98" icon={<ToggelSearch />}></Menu.Item>
      </Menu>
    </div>
  );
}
