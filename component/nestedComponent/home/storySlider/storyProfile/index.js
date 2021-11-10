import Image from "next/image";
import Profile from "../../../../re-usabelComponent/profile";
export default function StoryProfile() {
  return (
    <div className="story_profile_main">
      <div className="story_profile">
        <Profile
          profile="/images/dashboard/ProfileImage2.svg"
          nameColor="storyText"
          name="Lydia Workman"
          className="grey storyProfile"
          class="image"
          time="10mins ago"
        />
      </div>
    </div>
  );
}
