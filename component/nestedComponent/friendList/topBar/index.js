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
import { PlusCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

export default function Topbar() {
  const friend = useSelector(
    (state) => state?.freinds?.allfriend?.result?.user_friends
  );
  const closeFreind = useSelector(
    (state) => state?.freinds.allCloseFriend?.result?.user_friends
  );

  console.log(friend, "freind");
  console.log(closeFreind, "close");

  var uncloseFriend = friend?.filter(
    (data) => !closeFreind?.some((el) => el?.friend?.id === data?.friend?.id)
  );

  console.log(uncloseFriend, "uncloseFriend");

  const { TabPane } = Tabs;
  const [showButton, setShowButton] = useState(false);
  const [text, setText] = useState(true);
  const [isCloseModalVisible, setIsCloseModalVisible] = useState(false);

  const closeFriendsModel = () => {
    setIsCloseModalVisible(true);
  };
  const familyModel = () => {
    setIsCloseModalVisible(true);
  };
  const handleCancel = () => {
    setIsCloseModalVisible(false);
  };

  const operations = (
    <Button
      className={`add_button ${text ? "close" : "family"}`}
      onClick={text ? closeFriendsModel : familyModel}
    >
      <p>Add Freinds</p>
      <PlusCircleOutlined />
    </Button>
  );

  return (
    <>
      <div className="request_topbar">
        <p className="heading">Friends List</p>
        <div className="top_bar">
          <Tabs
            // defaultActiveKey="1"

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

      {isCloseModalVisible && (
        <Modal
          className="friendRequest_modal"
          title={text ? "< Add close Friends" : "< Add Family"}
          visible={isCloseModalVisible}
          // onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input placeholder="search" suffix={<Searchicon />} />
          {uncloseFriend.length ? (
            uncloseFriend?.map((t, i) => (
              <SmallRequestcard
                key={i}
                id={t?.friend.id}
                closeFriends={true}
                url="/images/request/requestProfile2.svg"
                name={t?.friend.username}
              />
              // </div>
            ))
          ) : (
            <h1>Your all Freinds add in Close Friends</h1>
          )}
        </Modal>
      )}
    </>
  );
}
