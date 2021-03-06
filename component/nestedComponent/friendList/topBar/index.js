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
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import EmptyData from "../../../re-usabelComponent/friendsList/emptyData";

export default function Topbar() {
  const router = useRouter();
  const [filterSearch, setFilterSearch] = useState("");

  const friend = useSelector(
    (state) => state?.freinds?.allfriend?.result?.user_friends
  );
  const closeFriend = useSelector(
    (state) => state?.freinds.allCloseFriend?.result?.user_friends
  );
  const familyFriend = useSelector(
    (state) => state?.freinds?.allFamilyFriend?.result?.user_friends
  );
  const allUser = useSelector(
    (state) => state?.freinds?.allUser?.result?.user_list
  );
  const closeCon = useSelector(
    (state) => state?.freinds?.closeConnection?.result?.user_list
  );
  const familyCon = useSelector(
    (state) => state?.freinds?.familyConnection?.result?.user_list
  );

  var noncloseFriend = friend?.filter(
    (data) => !closeFriend?.some((el) => el?.friend?.id === data?.friend?.id)
  );
  var nonFamilyFriend = friend?.filter(
    (data) => !familyFriend?.some((el) => el?.friend?.id === data?.friend?.id)
  );

  var closeConnection = closeCon?.filter((data) =>
    noncloseFriend?.some((el) => el.friend?.id === data.user_id)
  );
  var familyConnection = familyCon?.filter((data) =>
    nonFamilyFriend?.some((el) => el.friend?.id === data.user_id)
  );

  const { TabPane } = Tabs;

  const [text, setText] = useState(true);
  const [isCloseModalVisible, setIsCloseModalVisible] = useState(false);

  const closeFriendsModel = () => {
    setIsCloseModalVisible("Closefriend");
  };
  const familyModel = () => {
    setIsCloseModalVisible("Family");
  };
  const allFriendModal = () => {
    setIsCloseModalVisible("Friend");
  };
  const handleCancel = () => {
    setIsCloseModalVisible(false);
  };

  const addFreindData =
    isCloseModalVisible === "Closefriend"
      ? noncloseFriend
      : isCloseModalVisible === "Family"
      ? nonFamilyFriend
      : isCloseModalVisible === "Friend"
      ? allUser
      : [];

  const operations = (
    <Button
      className={`add_button ${
        router.query.connection === "Close-friends" && "close"
      } ${router.query.connection === "Family" && "family"} ${
        router.query.connection === "All-friends" && "allFriend"
      }`}
      onClick={
        (router.query.connection === "Close-friends" && closeFriendsModel) ||
        (router.query.connection === "Family" && familyModel) ||
        (router.query.connection === "All-friends" && allFriendModal)
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
            defaultActiveKey={
              (router.query.connection === "friend-requests" && "1") ||
              (router.query.connection === "All-friends" && "2") ||
              (router.query.connection === "Close-friends" && "3") ||
              (router.query.connection === "Family" && "4")
            }
            tabBarExtraContent={
              router.query.connection === "friend-requests" ? "" : operations
            }
          >
            <TabPane
              tab={
                <Button
                  className="friends_request"
                  onClick={() => {
                    router.push({
                      pathname: ``,
                      query: { connection: "friend-requests" },
                    });
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
                    setText("allFriend");
                    router.push({
                      pathname: ``,
                      query: { connection: "All-friends" },
                    });
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
                    setText("closeFriend");
                    router.push({
                      pathname: ``,
                      query: { connection: "Close-friends" },
                    });
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
                    setText("Family");
                    router.push({
                      pathname: ``,
                      query: { connection: "Family" },
                    });
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
            (router.query.connection === "Close-friends" &&
              "< Add close Friends") ||
            (router.query.connection === "Family" && "< Add Family") ||
            (router.query.connection === "All-friends" && "< Users")
          }
          visible={!!isCloseModalVisible}
          onCancel={handleCancel}
        >
          <Input
            placeholder="search"
            onChange={(e) => {
              setFilterSearch(e.target.value);
            }}
            suffix={<Searchicon />}
          />
          <div className="scroll_div">
            {addFreindData?.length ? (
              addFreindData
                ?.filter((x) => {
                  if (filterSearch) {
                    var name =
                      (text === "allFriend" && x?.user_username) ||
                      x?.friend?.username;
                    return name?.includes(filterSearch);
                  } else {
                    return addFreindData;
                  }
                })
                .map((t, i) => (
                  <SmallRequestcard
                    key={i}
                    id={(text === "allFriend" && t?.user_id) || t?.friend?.id}
                    connectionType={isCloseModalVisible}
                    closeFriends={true}
                    url="/images/request/requestProfile1.svg"
                    name={
                      (text === "allFriend" && t?.user_username) ||
                      t?.friend?.username
                    }
                    connection={
                      (isCloseModalVisible === "Closefriend" &&
                        closeConnection) ||
                      (isCloseModalVisible === "Family" && familyConnection) ||
                      (isCloseModalVisible === "Friend" && allUser)
                    }
                  />
                ))
            ) : (
              <EmptyData text="already added all friends" />
            )}
          </div>
        </Modal>
      )}
    </>
  );
}
