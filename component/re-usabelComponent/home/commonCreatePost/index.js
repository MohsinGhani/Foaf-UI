import Image from "next/image";
import React from "react";
import Profile from "../../profile";

export default function CreatePostContent() {
  return (
    <div className="Create_content">
      <Profile
        profile="/images/dashboard/samesize.svg"
        className="CreatePostProfile"
        nameColor="CreatePostColor"
        name="Lydia Workman"
        class="image"
        privacy={true}
      />
      <div className="background">
        <p>whats up?</p>
      </div>
      <div>
        <Image
          src="/images/CreatePost/backgroundColor.png"
          width="50"
          height="50"
          alt="color"
        />
      </div>
    </div>
  );
}
