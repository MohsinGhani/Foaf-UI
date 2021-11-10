import Image from "next/image";
import React from "react";

export const Avatar = (props) => {
  console.log(props.classtext, "classsss");
  return (
    <div className={props.classtext}>
      <Image src={props.profile} alt="postProfile" width="50" height="50" />
    </div>
  );
};
