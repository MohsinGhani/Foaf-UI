// import Accordion from "../reUsabelComponent/setting/accordion";

import SettingAccordion from "../nestedComponent/setting/accordion";
import CommonHeading from "../re-usabelComponent/setting/commonHeading";
import CommonChangeText from "../re-usabelComponent/setting/commonChangeText";
export default function Setting() {
  return (
    <div className="setting_main">
      <div className="left_side">
        <SettingAccordion />
      </div>
      <div className="right_side">
        <CommonHeading />
        <CommonChangeText />
      </div>
    </div>
  );
}
