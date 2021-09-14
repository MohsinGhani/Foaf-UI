import { Menu } from "antd";

import ToogelSearch from "../../dashBoard/dashboardIcons/toggelSearch";
import ToggelHome from "../../dashBoard/dashboardIcons/toggelhomje";
export default function ToggelMobile() {
  return (
    <div className="mobile_toggel_wow">
      <Menu className="menu" mode="horizontal">
        <Menu.Item key="99" icon={<ToggelHome />}></Menu.Item>
        <Menu.Item key="98" icon={<ToogelSearch />}></Menu.Item>
      </Menu>
    </div>
  );
}
