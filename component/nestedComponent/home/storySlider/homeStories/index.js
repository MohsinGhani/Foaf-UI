import Image from "next/image";

export default function Stories({ url, name, bgurl }) {
  return (
    <div className="main" style={{ backgroundImage: "url(" + bgurl + ")" }}>
      <div className="profile">
        <Image src={url} alt="profile" width="100%" height="100%" />
      </div>

      <div className="name">{name}</div>
    </div>
  );
}
