import { Form } from "antd";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { PatternContext } from "../../../shared/helper";
import { CommonButton } from "../../re-usabelComponent/common/button";
import Identify from "./identify";
import Invite from "./inviteFriend";
import Language from "./language";

const UserProfileCommon = ({ setActiveStep, activeStep, next, skip }) => {
  const userSteps = () => {
    switch (activeStep) {
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

  return (
    <div className="profile_user">
      {userSteps()}
      <CommonButton butText="Next" className="next_profile" onclick={next} />
      <CommonButton butText="Skip" className="Skip_profile" onclick={skip} />
    </div>
  );
};

export default UserProfileCommon;
