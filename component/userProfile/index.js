import React from "react";
import UserProfileCommon from "../nestedComponent/userProfile";
import Identify from "../nestedComponent/userProfile/identify";
import Pattern from "../re-usabelComponent/common/pattern";

const UserProfile = () => {
  return (
    <div>
      <Pattern child={<UserProfileCommon />} />
    </div>
  );
};

export default UserProfile;
