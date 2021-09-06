import Image from "next/image";

export default function Card(props) {
  return (
    <div className="main">
      <div className="profile">
        <Image src={props.url} alt="profile" width="40" height="40" />
      </div>

      <div className="name">Erin Press</div>
    </div>
  );
}
