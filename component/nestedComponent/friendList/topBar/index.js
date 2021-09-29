import { Button } from "react-bootstrap";
import { Tabs } from "antd";
import FriendsRequest from "../friendsRequest";
import AllFriends from "../allFriends";
import CloseFriends from "../closeFriends";
import Family from "../family";
import { useState } from "react";
import { Modal } from "antd";
import { Input } from "antd";
import SmallRequestcard from "../../../re-usabelComponent/friendsList/smallRequestCard";
import Searchicon from "../../dashBoard/dashboardIcons/search";

export default function Topbar() {
  const { TabPane } = Tabs;
  const [showButton, setShowButton] = useState(false);
  const [text, setText] = useState(true);
  const [isCloseModalVisible, setIsCloseModalVisible] = useState(false);
  const [isFamilyModalVisible, setIsFamilyCloseModalVisible] = useState(false);

  const closeFriendsModel = () => {
    setIsCloseModalVisible(true);
  };
  const familyModel = () => {
    setIsCloseModalVisible(true);
  };
  const handleCancel = () => {
    setIsCloseModalVisible(false);
    setIsFamilyCloseModalVisible(false);
  };

  const operations = (
    <Button
      className="add_button"
      onClick={text ? closeFriendsModel : familyModel}
    >
      <p>+ Add {text ? "Close Friends" : "family"}</p>
    </Button>
  );

  function callback(key) {
    console.log(key);
  }
  return (
    <>
      <div className="request_topbar">
        <p className="heading">Friends List</p>
        <div className="top_bar">
          <Tabs
            // defaultActiveKey="1"
            onChange={callback}
            tabBarExtraContent={showButton ? operations : ""}
          >
            <TabPane
              tab={
                <Button
                  className="friends_request"
                  onClick={() => {
                    setShowButton(false);
                  }}
                >
                  Friends request
                </Button>
              }
              key="1"
            >
              <FriendsRequest friendsRequest={true} />
            </TabPane>
            <TabPane
              tab={
                <Button
                  className="all_frineds"
                  onClick={() => {
                    setShowButton(false);
                  }}
                >
                  All friends
                </Button>
              }
              key="2"
            >
              <AllFriends allFriends={true} />
            </TabPane>
            <TabPane
              tab={
                <Button
                  className="close_friends"
                  onClick={() => {
                    setShowButton(true);
                    setText(true);
                  }}
                >
                  Close friends
                </Button>
              }
              key="3"
            >
              <CloseFriends closeFriends={true} />
            </TabPane>
            <TabPane
              tab={
                <Button
                  className="family"
                  onClick={() => {
                    setShowButton(true);
                    setText(false);
                  }}
                >
                  Family
                </Button>
              }
              key="4"
            >
              <Family family={true} />
            </TabPane>
          </Tabs>
        </div>
      </div>
      <Modal
        title={text ? "< Add close Friends" : "< Add Family"}
        visible={isCloseModalVisible}
        // onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input placeholder="search" suffix={<Searchicon />} />
        <SmallRequestcard
          url="/images/request/requestProfile2.svg"
          name="Marcus Botosh"
          closeFriends={true}
        />
        <SmallRequestcard
          url="/images/request/requestProfile2.svg"
          name="Marcus Botosh"
          closeFriends={true}
        />
        <SmallRequestcard
          url="/images/request/requestProfile2.svg"
          name="Marcus Botosh"
          closeFriends={true}
        />
        <SmallRequestcard
          url="/images/request/requestProfile2.svg"
          name="Marcus Botosh"
          closeFriends={true}
        />
      </Modal>
    </>
  );
}
