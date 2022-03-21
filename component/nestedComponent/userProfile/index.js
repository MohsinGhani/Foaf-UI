import { Form } from "antd";
import React, { useState } from "react";
import { CommonButton } from "../../re-usabelComponent/common/button";
import Identify from "./identify";
import Invite from "./inviteFriend";
import Language from "./language";

const UserProfileCommon = () => {
  const [condition, setCondition] = useState(1);
  console.log(condition);
  const userSteps = () => {
    switch (condition) {
      case 1:
        return <Identify />;
      case 2:
        return (
          <h1>
            <Language />
          </h1>
        );
      case 3:
        return <Invite />;
      default:
        console.log("some thing wrong");
    }
  };
  const next = () => {
    setCondition(++condition);
  };
  return (
    <div className="profile_user">
      <Form name="userDetails" layout="verticle">
        {userSteps()}
      </Form>
      <CommonButton butText="Next" className="next_profile" onclick={next} />
      <CommonButton butText="Skip" className="Skip_profile" />
    </div>
  );
};

export default UserProfileCommon;
