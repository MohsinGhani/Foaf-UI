// import Accordion from "../reUsabelComponent/setting/accordion";

import SettingAccordion from "../nestedComponent/setting/accordion";

export default function Setting() {
  return (
    <div className="setting_main">
      <div className="left-side">
        <SettingAccordion />
      </div>
    </div>
  );
}