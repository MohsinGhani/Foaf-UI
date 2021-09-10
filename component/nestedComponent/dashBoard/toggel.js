import { Switch } from "antd";
export default function Toggel() {
  return (
    <div className="toggel_main">
      <Switch
        checkedChildren={<img src="/images/dashboard/Compass Icon.svg" />}
        unCheckedChildren={<img src="/images/dashboard/red.svg" />}
        defaultChecked
      />
    </div>
  );
}
