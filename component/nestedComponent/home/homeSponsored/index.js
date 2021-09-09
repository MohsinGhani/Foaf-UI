import Image from "next/image";

export default function Sponsored() {
  return (
    <div className="sponsored-main">
      <div className="text">
        <p> Sponsored</p>
      </div>
      <div className="sponsored-post">
        <div className="profile-main">
          <div className="profile-image">
            <div className="post-profile">
              <Image
                src="/images/dashboard/ProfileImage.svg"
                alt="postProfile"
                width="45"
                height="45"
              />
            </div>
            <div className="name">
              <div>
                Lydia Workman
                <Image
                  src="/images/dashboard/Badge.svg"
                  alt="Badge"
                  width="11"
                  height="11.72"
                />
              </div>
              <p>10mins ago</p>
            </div>
          </div>

          <div className="dot">
            <Image
              src="/images/dashboard/dots.svg"
              alt="dot"
              width="20"
              height="30"
            />
          </div>
        </div>

        <div className="post">
          <Image
            src="/images/dashboard/sponsored.svg"
            alt="post"
            width="320"
            height="172"
          />
        </div>
      </div>
    </div>
  );
}
