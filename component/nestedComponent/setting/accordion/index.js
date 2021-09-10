import { Collapse } from "antd";
const { Panel } = Collapse;
export default function SettingAccordion() {
  function callback(key) {
    console.log(key);
  }

  return (
    <div className="accordion_main">
      <Collapse onChange={callback}>
        <Panel
          className=""
          header="This is panel header 1"
          showArrow={false}
          key="1"
        >
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </Panel>
        <Panel header="Profile Information" showArrow={false} key="2">
          <p>hello</p>
        </Panel>
        <Panel header="Sign in & Security" showArrow={false} key="3">
          <p>hello</p>
        </Panel>
        <Panel header="Account Preference" showArrow={false} key="4">
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </Panel>
        <Panel header="Bank Account Setting" showArrow={false} key="5">
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </Panel>
        <Panel header="Endorsement Setting" showArrow={false} key="6">
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </Panel>
        <Panel header="Visibility" showArrow={false} key="7">
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </Panel>
        <Panel header="Communication" showArrow={false} key="8">
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </Panel>
        <Panel header="Dats Privacy" showArrow={false} key="9">
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </Panel>
        <Panel header="Dats Privacy" showArrow={false} key="10">
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </Panel>
      </Collapse>
    </div>
  );
}
