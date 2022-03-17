/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  familyConnection,
  closeConnection,
  allUser,
} from "../../../features/friends";

export default function SmallRequestcard(props) {
  const [seleted, setselected] = useState(false);
  const [but, setBut] = useState(false);
  const [connectionid, setConnectionId] = useState(null);
  const dispatch = useDispatch();
  const statedata = useSelector((state) => state);

  var data = statedata.user.userDetailes.result?.user;
  var id = statedata.user.userDetailes.result?.user?.id;

  useEffect(() => {
    props.connection &&
      props.connection
        ?.filter((data) => data?.user_id === props.id)
        .every((item) => item.request_sent) &&
      setselected(true);

    let connectionId =
      props.connection &&
      props.connection?.filter((data) => data?.user_id === props.id)[0]
        ?.connection_id;
    setConnectionId(connectionId);
  }, [props]);
  const add = async () => {
    try {
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/create_rel_connection`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Token ${data.token}`,
          },
          body: new URLSearchParams({
            connection_creator: id,
            connection_receiver: props.id,
            connection_type: props.connectionType,
          }),
        }
      );

      const requestResponse = await response.json();
      console.log(requestResponse, "add close friend");

      const friendData = getdata();
      return friendData;
    } catch (err) {
      console.log(err), "error araha hai";
    }
  };
  const remove = async () => {
    if (connectionid) {
      try {
        let response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/remove_connection`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Token ${data.token}`,
            },
            body: new URLSearchParams({
              connection_request_id: connectionid,
            }),
          }
        );

        const removeResponse = await response.json();
        console.log(removeResponse, "remove ka response");
        const friendDat = getdata();
        return friendDat;
      } catch (err) {
        console.log(err), "error araha hai";
      }
    }
  };

  const getdata = async () => {
    try {
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/get_connection_request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Token ${data.token}`,
          },
          body: new URLSearchParams({
            connection_type: props.connectionType,
          }),
        }
      );

      const getallfriendsrequest = await response.json();
      console.log(getallfriendsrequest, "getallfriendsrequestinclosefriend");
      hellodata();
    } catch (err) {
      console.log(err), "error araha hai";
    }

    try {
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/not_friend_users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Token ${data.token}`,
          },
          body: new URLSearchParams({
            connection_type: props.connectionType,
          }),
        }
      );

      const getallFamilyConnection = await response.json();

      console.log(getallFamilyConnection, props.connectionType);
      (props.connectionType === "Closefriend" &&
        dispatch(closeConnection(getallFamilyConnection))) ||
        (props.connectionType === "Family" &&
          dispatch(familyConnection(getallFamilyConnection))) ||
        (props.connectionType === "Friend" &&
          dispatch(allUser(getallFamilyConnection)));
    } catch (err) {
      console.log(err), "error araha hai";
    }
  };
  const hellodata = async () => {
    try {
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/get_user_connections`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Token ${data.token}`,
          },
          body: new URLSearchParams({
            connection_type: props.connectionType,
          }),
        }
      );

      const getallfriends = await response.json();
      console.log(getallfriends, "getallfriendsinclosefriend");

      return getallfriends;
    } catch (err) {
      console.log(err), "error araha hai";
    }
  };

  return (
    <div className="small_requestCard_main">
      <div className="request">
        <Image src={props.url} alt="request" width="140" height="140" />
      </div>
      <div className="contant">
        <div className="text_ellips">
          <p className="name">{props?.name}</p>
        </div>

        <div className="mutual">
          <div className="image1">
            <Image
              src="/images/request/mutual1.svg"
              width="58"
              height="58"
              alt="request"
            />
          </div>

          <div className="image2">
            <Image
              src="/images/request/mutual2.svg"
              width="58"
              height="58"
              alt="request"
            />
          </div>
          <div className="image3">
            <Image
              src="/images/request/mutual3.svg"
              width="58"
              height="58"
              alt="request"
            />
          </div>
          <div className="mutual_friends">
            <p>85 mutual friends</p>
          </div>
        </div>

        <div
          className={
            seleted
              ? ` ${props.connectionType === "Closefriend" && "closeFriend"} ${
                  props.connectionType === "Family" && "family"
                } ${props.connectionType === "Friend" && "alluser"}`
              : "unSelected"
          }
        >
          <Button
            disabled={but}
            onClick={() => {
              seleted ? setselected(false) : setselected(true);
              seleted ? remove() : add();
            }}
          >
            {seleted ? <p>selected</p> : <p>select</p>}
          </Button>
        </div>
      </div>
    </div>
  );
}
