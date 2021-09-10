import Image from "next/image";

export default function Post(props) {
  return (
    <div className="post-main">
      <div className="profile-main">
        <div className="profile-image">
          <div
            className={
              props.profilecolor ? "post-profile" : "post-profile-color"
            }
          >
            <Image src={props.url} alt="postProfile" width="50" height="50" />
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
            <p>{props.time}</p>
          </div>
        </div>

        <div className="dot">
          <Image
            src="/images/dashboard/dots.svg"
            alt="dot"
            width="15"
            height="25"
          />
        </div>
      </div>

      <div className="post">
        <Image
          src="/images/dashboard/post.svg"
          alt="post"
          width="580"
          height="300"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, netus
          nunc, vulputate at tempus, sed aliquet non. Nulla libero a a orci
          placerat. Viverra vitae congue in duis.
        </p>
      </div>
      <div className="bottom">
        <div className="heart">
          <div className="heartIcon">
            <Image
              src="/images/dashboard/heartIcon.svg"
              alt="heart"
              width="18"
              height="16"
            />
          </div>
          <p>10,720 Reactions</p>
        </div>
        <div className="views">
          <div className="viewsIcon">
            <Image
              src="/images/dashboard/show.svg"
              alt="view"
              width="20"
              height="16"
            />
          </div>
          <p>24,928 Views</p>
        </div>
      </div>
    </div>
  );
}