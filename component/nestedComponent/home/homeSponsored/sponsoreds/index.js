import SponsoredPost from "../sponsoredPost";

export default function Sponsoreds() {
  return (
    <div className="sponsored_main">
      <div className="text">
        <p> Sponsored</p>
      </div>
      <div className="contant">
        <SponsoredPost
          url="/images/dashboard/sponsored1.svg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
        <SponsoredPost
          url="/images/dashboard/sponsored2.svg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          email="Order.nayka.com"
        />
      </div>
    </div>
  );
}
