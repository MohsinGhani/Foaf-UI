import { Switch } from "antd";
export default function CommonSwitch({ heading, text, colorText }) {
  return (
    <div className="main_commonSitch">
      <div className="text_main">
        <div>
          <p className="text_one">{heading}</p>
          <p className="text_two">{text}</p>
        </div>
        <div>
          <p className="change">change</p>
          <Switch />
        </div>
      </div>
      <div>
        <p className="colorfull_text">{colorText}</p>
      </div>
    </div>
  );
}
