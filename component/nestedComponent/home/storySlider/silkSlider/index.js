/* eslint-disable react/display-name */
import Slider from "react-slick";
import { Progress } from "antd";
import Image from "next/image";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

// import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "black" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "black" }}
//       onClick={onClick}
//     />
//   );
// }

export default function SilkSlider() {
  const statedata = useSelector((state) => state);
  var data = statedata;
  // console.log(data.create.video.result.friends, "vedioStataus123");
  const settings = {
    customPaging: function (i) {
      return <Progress percent={20} size="medium" />;
    },
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider_main">
      <div className="slider">
        <Slider {...settings}>
          <div className="story_image">
            <Image
              src="/images/dashboard/Story1.svg"
              width="1100"
              height="560"
              alt="story"
            />
          </div>
          <div className="story_image">
            <Image
              src="/images/dashboard/post4.jpg"
              width="1100"
              height="560"
              alt="story"
            />
          </div>

          <div className="story_image">
            <Image
              src="/images/dashboard/post.svg"
              width="1100"
              height="560"
              alt="story"
            />
          </div>
          {/* <ReactPlayer
            controls
            className="react-player"
            url="blob:http://localhost:3000/3744e4a2-60ee-4189-88aa-f5924c11fb6d"
            width="100%"
          /> */}
          <div className="story_image">
            <Image
              src="/images/dashboard/post3.jpg"
              width="1100"
              height="560"
              alt="story"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
