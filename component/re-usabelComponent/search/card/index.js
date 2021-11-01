import Image from "next/image";
import React, { useState } from "react";
import { Space } from "antd";

export default function SearchCard(props) {
  const [show, setShow] = useState("");
  return (
    <div className="Search_card">
      <div className="Search_text">
        <div className="image">
          <Image src={props.profile} alt="pic" width="60px" height="60px" />
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
          <div className="color_text">{props.text2}</div>
          <div className="color_text">{props.text3}</div>
          <div className="color_text">{props.text4}</div>
        </div>
      </div>
      <div
        className={
          props.selected && show === props.id ? "selected" : "unSelected"
        }
        onClick={() => {
          props.setSelected(!props.selected);
          setShow(props.id);
        }}
      >
        <svg
          width="35"
          height="34"
          viewBox="0 0 35 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="17.5" cy="17" r="17" fill="#BFBFBF" />
          <path
            d="M21.5548 11.981C21.5548 14.29 19.7381 16.1588 17.4935 16.1588C15.2489 16.1588 13.4322 14.29 13.4322 11.981C13.4322 9.67204 15.2489 7.80322 17.4935 7.80322C19.7381 7.80322 21.5548 9.67204 21.5548 11.981Z"
            fill="white"
          />
          <path
            d="M19.9774 17.3525H20.2784C21.6708 17.432 24.4557 18.4029 24.4557 21.6496V22.7239C24.524 23.3776 24.2715 24.6508 22.7152 24.5144H12.2718C11.3109 24.5144 10.5312 23.7124 10.5312 22.7239V21.6496C10.5312 19.2772 12.4024 17.3525 14.7086 17.3525H15.0096C15.7674 17.7255 16.6015 17.9493 17.4935 17.9493C18.3855 17.9493 19.2232 17.7255 19.9774 17.3525Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2563:28981"
              x1="-3.50714"
              y1="-7.99353e-06"
              x2="34.9784"
              y2="2.11597"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C7539A" />
              <stop offset="0.555477" stopColor="#FB3E78" />
              <stop offset="1" stopColor="#FF5369" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
