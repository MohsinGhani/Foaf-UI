import Image from "next/image";
import React, { useState } from "react";
import { Space } from "antd";
import PeopleIcon from "./imageComponent/peopleIcon";
import { useRouter } from "next/router";
import PlaceIcon from "./imageComponent/placesIcone";
import EventsIcon from "./imageComponent/eventsIcon";

export default function SearchCard(props) {
  const router = useRouter();
  const [show, setShow] = useState(null);
  // console.log("show", show);
  // console.log(props.id, "prop.id");
  // console.log("prop.selected", props.selected);
  return (
    <div className="Search_card">
      <div className="Search_text">
        <div className={`image ${props.class}`}>
          <Image
            src="/images/search/people2.png"
            alt="pic"
            width="60px"
            height="60px"
          />
        </div>
        <div className="text">
          <Space size={5}>
            <div className="heading">{props.text1}</div>
            <div>
              <svg
                width="12"
                height="13"
                viewBox="0 0 11 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.81213 0.409115C5.20851 0.0491752 5.79149 0.0491751 6.18787 0.409115L7.02442 1.16876C7.19427 1.323 7.40546 1.41622 7.62793 1.43514L8.72355 1.5283C9.24268 1.57244 9.65492 2.01171 9.69635 2.56489L9.78378 3.73235C9.80153 3.9694 9.88901 4.19444 10.0338 4.37544L10.7467 5.26684C11.0844 5.68921 11.0844 6.31042 10.7467 6.73279L10.0338 7.62419C9.88901 7.80519 9.80153 8.03023 9.78378 8.26728L9.69635 9.43474C9.65492 9.98792 9.24268 10.4272 8.72355 10.4713L7.62793 10.5645C7.40547 10.5834 7.19427 10.6766 7.02442 10.8309L6.18787 11.5905C5.79149 11.9505 5.20851 11.9505 4.81213 11.5905L3.97558 10.8309C3.80573 10.6766 3.59454 10.5834 3.37207 10.5645L2.27645 10.4713C1.75732 10.4272 1.34508 9.98792 1.30365 9.43475L1.21622 8.26728C1.19847 8.03023 1.11099 7.80519 0.966241 7.62419L0.253342 6.73279C-0.0844475 6.31042 -0.0844475 5.68921 0.253342 5.26684L0.966241 4.37544C1.11099 4.19444 1.19847 3.9694 1.21622 3.73235L1.30365 2.56489C1.34508 2.01171 1.75732 1.57244 2.27645 1.5283L3.37207 1.43514C3.59453 1.41622 3.80573 1.323 3.97558 1.16876L4.81213 0.409115Z"
                  fill="#6EC2FF"
                />
                <path
                  d="M7.85626 5.13718L5.17869 7.47504C5.08286 7.55871 4.95885 7.59809 4.8292 7.59809C4.70519 7.59809 4.58117 7.55871 4.48534 7.47504L3.14374 6.30857C2.95209 6.13631 2.95209 5.86561 3.14374 5.69827C3.3354 5.53092 3.65107 5.53092 3.84273 5.69827L4.8292 6.55958L7.15727 4.52687C7.34893 4.35953 7.6646 4.35953 7.85626 4.52687C8.04791 4.69914 8.04791 4.96984 7.85626 5.13718Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="freind_btn">Friends</div>
          </Space>
          <div className="color_text">Freind</div>
          <div className="color_text">
            {props.mutualFriend
              ? `${props.mutualFriend} Mutual Friend`
              : "29 Mutual Friend"}
          </div>
          <div className="color_text">
            Senior Design and marketing engineer at IT TECHNOLOGY
          </div>
        </div>
      </div>
      <div
        className={show === props.id ? "selected" : "unSelected"}
        onClick={() => {
          show !== props.id ? setShow(props.id) : setShow(null);
        }}
      >
        {router.query.search === "people" && <PeopleIcon />}
        {router.query.search === "places" && <PlaceIcon />}
        {router.query.search === "Events" && <EventsIcon />}
      </div>
    </div>
  );
}
