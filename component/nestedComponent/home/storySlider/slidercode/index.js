/* eslint-disable @next/next/no-img-element */

import Slider from "react-slick";
import CreateStory from "./createStory";

import Stories from "./homeStories";
import { useState } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        width: "27px",
        height: "27px",
      }}
      onClick={onClick}
    />
  );
}

export default function StorySlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 900,

    slidesToShow: 5,
    slidesToScroll: 5,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 950,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="StorySlider_main">
        <Slider {...settings}>
          <div>
            <CreateStory />
          </div>
          <div>
            <Stories
              url="/images/dashboard/samesize.svg"
              name="Erin Press"
              bgurl="/images/dashboard/story1.png"
            />
          </div>
          <div>
            <Stories
              url="/images/dashboard/requestProfile1.svg"
              name="Charlie Carder"
              bgurl="/images/dashboard/story2.png"
            />
          </div>
          <div>
            <Stories
              url="/images/dashboard/samesize.svg"
              name="Alfredo Schleifer"
              bgurl="/images/dashboard/story4.png"
            />
          </div>
          <div>
            <Stories
              url="/images/dashboard/requestProfile3.svg"
              name="Tatiana Dorwart"
              bgurl="/images/dashboard/story3.png"
            />
          </div>
          <div>
            <Stories
              url="/images/dashboard/requestProfile1.svg"
              name="Lincoln Carder"
              bgurl="/images/dashboard/story2.png"
            />
          </div>

          {/* <div>
            <Stories
              url="/images/dashboard/samesize.svg"
              name="Erin Press"
              bgurl="/images/dashboard/story4.png"
            />
          </div>
          <div>
            <Stories
              url="/images/dashboard/requestProfile1.svg"
              name="Erin Press"
              bgurl="/images/dashboard/story2.png"
            />
          </div>
          <div>
            <img
              src="/images/dashboard/king.png"
              alt="king"
              width="100"
              height="140"
            />
          </div> */}
        </Slider>
      </div>
    </>
  );
}
