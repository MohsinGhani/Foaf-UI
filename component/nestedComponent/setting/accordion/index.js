import { Collapse } from "antd";
import Link from "next/link";
const { Panel } = Collapse;
export default function SettingAccordion() {
  return (
    <div className="accordion_main">
      <Collapse>
        <Panel header="Account Preferences" showArrow={false} key="1">
          <Link href="/">Profile information</Link>

          <Link href="/">site Preferences</Link>

          <Link href="/">Syncing Options</Link>

          <Link href="/">Subscriptions & Payments</Link>
          <Link href="/">Monitise Option</Link>
          <Link href="/">Account Management</Link>
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
