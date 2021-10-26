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
  const closeFriend = useSelector(
    (state) => state?.freinds.allCloseFriend?.result?.user_friends
  );
  const familyFriend = useSelector(
    (state) => state?.freinds.allFamilyFriend?.result?.user_friends
  );
  console.log(friend, "freind");
  console.log(closeFriend, "close");

  var noncloseFriend = friend?.filter(
    (data) => !closeFriend?.some((el) => el?.friend?.id === data?.friend?.id)
  );
  var nonFamilyFriend = friend?.filter(
    (data) => !familyFriend?.some((el) => el?.friend?.id === data?.friend?.id)
  );

  const { TabPane } = Tabs;
  const [showButton, setShowButton] = useState(false);
  const [text, setText] = useState(true);
  const [isCloseModalVisible, setIsCloseModalVisible] = useState(false);

  const closeFriendsModel = () => {
    setIsCloseModalVisible("Closefriend");
  };
  const familyModel = () => {
    setIsCloseModalVisible("Family");
  };
  const allFriend = () => {
    setIsCloseModalVisible("allFriend");
  };
  const handleCancel = () => {
    setIsCloseModalVisible(false);
  };

  const addFreindData =
    isCloseModalVisible === "Closefriend"
      ? noncloseFriend
      : isCloseModalVisible === "Family"
      ? nonFamilyFriend
      : [];

  const operations = (
    <Button
      className={`add_button ${text === "closeFriend" && "close"} ${
        text === "Family" && "family"
      } ${text === "allFriend" && "allFriend"}`}
      onClick={
        (text === "closeFriend" && closeFriendsModel) ||
        (text === "Family" && familyModel) ||
        (text === "allFriend" && allFriend)
      }
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
                    setShowButton(true);
                    setText("allFriend");
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
                    setText("closeFriend");
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
                    setText("Family");
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
          title={
            (text === "closeFriend" && "< Add close Friends") ||
            (text === "closeFriend" && "< Add Family") ||
            (text === "closeFriend" && "< allFriend")
          }
          visible={!!isCloseModalVisible}
          // onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input placeholder="search" suffix={<Searchicon />} />
          {addFreindData.length ? (
            addFreindData?.map((t, i) => (
              <SmallRequestcard
                key={i}
                id={t?.friend.id}
                connectionType={isCloseModalVisible}
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
