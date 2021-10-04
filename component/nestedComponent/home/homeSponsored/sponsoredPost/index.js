import Image from "next/image";

export default function SponsoredPost(props) {
  return (
    <div className="sponsored_post_main">
      <div className="sponsored_image">
        <Image src={props.url} alt="sponsorede" width="98" height="95" />
      </div>
      <div className="text_contant">
        <p className="text">{props.text}</p>
        <p className="email">{props.email}</p>
      </div>
    </div>
  );
}
