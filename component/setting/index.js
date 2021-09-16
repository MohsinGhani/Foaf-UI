// import Accordion from "../reUsabelComponent/setting/accordion";

import SettingAccordion from "../nestedComponent/setting/accordion";
import CommonHeading from "../re-usabelComponent/setting/commonHeading";
import CommonChangeText from "../re-usabelComponent/setting/commonChangeText";
import CommonSwitch from "../re-usabelComponent/setting/commonSwitch";
export default function Setting() {
  return (
    <div className="setting_main">
      <div className="left_side">
        <SettingAccordion />
      </div>
      <div className="right_side">
        <CommonHeading
          heading="Profile Information"
          text="Basic information associated with your profile"
        />
        <CommonChangeText
          heading="Name, Location, and  Industry"
          text="Choose how your name and profile fields appear to other members"
          selectedValue=""
        />
        <CommonSwitch
          heading="Enable Paywall"
          text="By enabling paywall, anyone who want to message you will have to pay before they can message."
          colorText="This fees will be charged from the user who will to message you on foaf. T&c applies"
        />
        <CommonSwitch
          heading="Private Account"
          text="To turn on private account to secure your account."
          colorText=""
        />

        <CommonHeading
          heading="Site Preferences"
          text="Manage your Friends Of a Friend experiences"
        />
        <CommonChangeText
          heading="Language"
          text="Select  the language you use on Friends Of a Friend"
          selectedValue="English"
        />
        <CommonChangeText
          heading="Content Language"
          text="Select  a language for translation"
          selectedValue=""
        />
        <CommonSwitch
          heading="Autoplay Videos"
          text="Choose to autoplay videos on Friends Of a Friend"
          colorText=""
        />
        <CommonChangeText
          heading="Showing profile photos"
          text="Choose to show or hide profile photos of other members"
          selectedValue="Everyone"
        />
        <CommonChangeText
          heading="Feed preferences"
          text="Customize your feed"
          selectedValue=""
        />
      </div>
    </div>
  );
}
