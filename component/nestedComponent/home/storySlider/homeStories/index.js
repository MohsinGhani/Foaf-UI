import Image from "next/image";

export default function Story({ url, name, bgurl }) {
  return (
    <div
      className="story_main"
      style={{
        backgroundImage: "url(" + bgurl + ")",
      }}
    >
      <div className="profile">
        <Image src={url} alt="profile" width="100%" height="100%" />
      </div>

      <div className="name">
        <p>{name}</p>
      </div>
    </div>
  );
}
