import Image from "next/image";
export default function StoryProfile() {
  return (
    <div className="story_profile_main">
      <div className="story_profile">
        <div className="image">
          <Image
            src="/images/dashboard/storyProfile.svg"
            alt="profile"
            width="90px"
            height="90px"
          />
        </div>
        <div className="contant">
          <p className="name">Omar Workman</p>
          <p className="time">10mins ago</p>
        </div>
      </div>
    </div>
  );
}
