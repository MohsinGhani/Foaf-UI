import Image from "next/image";

export default function Stories(props) {
  return (
    <div className="main">
      <div className="profile">
        <Image src={props.url} alt="profile" width="40" height="40" />
      </div>

      <div className="name">{props.name}</div>
    </div>
  );
}
