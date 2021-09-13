import Image from "next/image";

export default function Stories({ url, name }) {
  return (
    <div className="main">
      <div className="profile">
        <Image src={url} alt="profile" width="40" height="40" />
      </div>

      <div className="name">{name}</div>
    </div>
  );
}
