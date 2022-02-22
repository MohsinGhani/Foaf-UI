import { Space } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Grid from "antd/lib/card/Grid";
import React from "react";

const PostTag = () => {
  return (
    <div className="addTage_main">
      <Space direction="vertical" size={40}>
        <div className="iconClass">
          <Avatar
            shape="square"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7028 6.79717C23.5786 6.64489 23.4228 6.5223 23.2464 6.43814C23.07 6.35399 22.8775 6.31036 22.6825 6.31037H22.6479H22.6499H19.2545L20.1958 1.6693C20.2427 1.46412 20.2433 1.25086 20.1975 1.04542C20.1517 0.839985 20.0608 0.647664 19.9314 0.482799L19.9333 0.485798C19.8087 0.333659 19.6524 0.211244 19.4757 0.127274C19.299 0.0433045 19.1062 -0.000152302 18.9111 4.01043e-07H18.8785H18.8805C17.9924 0.0289883 17.2592 0.664723 17.0697 1.50937L17.0668 1.52237L16.8112 2.78384C16.8033 2.81583 16.7895 2.84581 16.7826 2.8778L16.084 6.31137H10.3676L11.309 1.6703C11.3559 1.46512 11.3565 1.25186 11.3107 1.04642C11.2649 0.840984 11.1739 0.648664 11.0445 0.483799L11.0465 0.486798C10.9219 0.334659 10.7656 0.212243 10.5889 0.128274C10.4122 0.0443041 10.2194 0.000847282 10.0242 0.000999984H9.99165H9.99362C9.10553 0.0299879 8.37236 0.665723 8.1829 1.51037L8.17994 1.52337L7.91351 2.83582C7.91351 2.85081 7.90365 2.86381 7.90069 2.8778L7.20797 6.31137H3.51055C2.62246 6.34036 1.88929 6.97509 1.69884 7.81974L1.69588 7.83274C1.64869 8.038 1.64788 8.2514 1.6935 8.45702C1.73912 8.66265 1.83 8.85518 1.95935 9.02024L1.95738 9.01724C2.2021 9.31512 2.56819 9.50404 2.97868 9.50404H3.01223H3.01026H6.55967L5.55119 14.472H1.84982C0.961728 14.501 0.228558 15.1367 0.038112 15.9813L0.0351517 15.9943C-0.0112849 16.1992 -0.0117186 16.4119 0.0338825 16.6169C0.0794836 16.822 0.169955 17.014 0.298619 17.1788L0.296645 17.1758C0.542351 17.4737 0.908442 17.6626 1.31894 17.6626H1.35249H1.35051H4.89992L3.95262 22.3287C3.90572 22.5339 3.90515 22.7471 3.95094 22.9526C3.99673 23.158 4.0877 23.3503 4.21708 23.5152L4.2151 23.5122C4.46081 23.8101 4.8269 23.999 5.2374 23.999H5.26996H5.26799C5.69213 23.9854 6.09989 23.83 6.42764 23.5569C6.75538 23.2839 6.98466 22.9086 7.07969 22.4896L7.08265 22.4766L8.05956 17.6646H13.7789L12.8316 22.3307C12.7847 22.5359 12.7841 22.7491 12.8299 22.9546C12.8757 23.16 12.9666 23.3523 13.096 23.5172L13.0941 23.5142C13.3398 23.8121 13.7058 24 14.1163 24H14.1489H14.1469C14.571 23.9865 14.9787 23.8311 15.3063 23.558C15.6339 23.2849 15.863 22.9096 15.9577 22.4906L15.9606 22.4776L16.9375 17.6656H20.4899C20.9139 17.6521 21.3216 17.4968 21.6493 17.2239C21.977 16.9511 22.2064 16.576 22.3016 16.1573L22.3046 16.1443C22.3532 15.9394 22.3551 15.7259 22.3101 15.5202C22.2651 15.3144 22.1745 15.1217 22.045 14.9568L22.047 14.9598C21.9222 14.8075 21.7658 14.6849 21.589 14.6008C21.4121 14.5166 21.2191 14.473 21.0237 14.473H20.9882H20.9902H17.5888L18.5973 9.50504H22.1496C22.5738 9.49145 22.9815 9.336 23.3093 9.06295C23.637 8.7899 23.8663 8.41461 23.9613 7.99567L23.9643 7.98267C24.0113 7.77734 24.0119 7.5639 23.9661 7.35829C23.9203 7.15268 23.8293 6.96019 23.6998 6.79517L23.7018 6.79817L23.7028 6.79717ZM8.7128 14.469L9.72127 9.50104H15.4406L14.4321 14.469H8.7128Z"
                  fill="url(#paint0_linear_4665_2527)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4665_2527"
                    x1="4.47035e-08"
                    y1="12"
                    x2="24"
                    y2="12"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EF843B" />
                    <stop offset="1" stopColor="#FFA567" />
                  </linearGradient>
                </defs>
              </svg>
            }
          />

          <p>Tag</p>
        </div>
        <div className="iconClass">
          <Avatar
            shape="square"
            icon={
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 0.25C5.96944 0.25 0.25 5.96944 0.25 13C0.25 20.0306 5.96944 25.75 13 25.75C20.0306 25.75 25.75 20.0306 25.75 13C25.75 5.96944 20.0306 0.25 13 0.25ZM13 2.375C18.8809 2.375 23.625 7.11906 23.625 13C23.625 18.8809 18.8809 23.625 13 23.625C7.11906 23.625 2.375 18.8809 2.375 13C2.375 7.11906 7.11906 2.375 13 2.375ZM8.21875 8.75C7.79606 8.75 7.39068 8.91791 7.0918 9.2168C6.79291 9.51568 6.625 9.92106 6.625 10.3438C6.625 10.7664 6.79291 11.1718 7.0918 11.4707C7.39068 11.7696 7.79606 11.9375 8.21875 11.9375C8.64144 11.9375 9.04682 11.7696 9.3457 11.4707C9.64459 11.1718 9.8125 10.7664 9.8125 10.3438C9.8125 9.92106 9.64459 9.51568 9.3457 9.2168C9.04682 8.91791 8.64144 8.75 8.21875 8.75ZM15.125 9.8125V11.9375H20.4375V9.8125H15.125ZM18.2796 14.0954C18.2796 15.8847 17.5613 17.1257 16.519 18.0139C15.4778 18.9022 14.0997 19.375 13 19.375C10.7464 19.375 9.21431 18.4613 8.019 17.2829L6.52513 18.8119C8.00731 20.2664 10.1525 21.5 13 21.5C14.6522 21.5 16.4659 20.8774 17.9141 19.6406C19.3623 18.4039 20.4046 16.4956 20.4046 14.0954H18.2796Z"
                  fill="url(#paint0_linear_4624_35236)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4624_35236"
                    x1="-2.75536"
                    y1="0.249994"
                    x2="26.1088"
                    y2="1.83698"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1A83CF" />
                    <stop offset="0.555477" stopColor="#5FB5F4" />
                    <stop offset="1" stopColor="#2DA6FF" />
                  </linearGradient>
                </defs>
              </svg>
            }
          />

          <p>Emotions</p>
        </div>
        <div className="iconClass">
          <Avatar
            shape="square"
            icon={
              <svg
                width="20"
                height="26"
                viewBox="0 0 20 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.8301 16.9957C5.0091 16.9957 0.891602 17.7262 0.891602 20.6437C0.891602 23.5597 4.9836 24.3112 9.8301 24.3112C14.6511 24.3112 18.7671 23.5882 18.7671 20.6692C18.7671 17.7502 14.6766 16.9957 9.8301 16.9957Z"
                  stroke="url(#paint0_linear_4665_2529)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.8301 12.8319C12.9936 12.8319 15.5586 10.2684 15.5586 7.10338C15.5586 3.93988 12.9936 1.37488 9.8301 1.37488C6.6666 1.37488 4.1016 3.93988 4.1016 7.10338C4.0896 10.2564 6.6351 12.8214 9.7881 12.8319L9.8301 12.8319Z"
                  stroke="url(#paint1_linear_4665_2529)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4665_2529"
                    x1="-1.21515"
                    y1="16.9957"
                    x2="18.72"
                    y2="19.674"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C7539A" />
                    <stop offset="0.555477" stopColor="#FB3E78" />
                    <stop offset="1" stopColor="#FF5369" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_4665_2529"
                    x1="2.75127"
                    y1="1.37488"
                    x2="15.7198"
                    y2="2.0879"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C7539A" />
                    <stop offset="0.555477" stopColor="#FB3E78" />
                    <stop offset="1" stopColor="#FF5369" />
                  </linearGradient>
                </defs>
              </svg>
            }
          />

          <p>People</p>
        </div>
        <div className="iconClass">
          <Avatar
            shape="square"
            icon={
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1429 11V19H1.85714V11H11.1429ZM11.1429 9H1.85714C1.3646 9 0.892226 9.21071 0.543944 9.58579C0.195663 9.96086 0 10.4696 0 11V19C0 19.5304 0.195663 20.0391 0.543944 20.4142C0.892226 20.7893 1.3646 21 1.85714 21H11.1429C11.6354 21 12.1078 20.7893 12.4561 20.4142C12.8043 20.0391 13 19.5304 13 19V11C13 10.4696 12.8043 9.96086 12.4561 9.58579C12.1078 9.21071 11.6354 9 11.1429 9Z"
                  fill="url(#paint0_linear_4624_35246)"
                />
                <path
                  d="M20.1429 1.77778V6.22222H10.8571V1.77778H20.1429ZM20.1429 0H10.8571C10.3646 0 9.89223 0.187301 9.54394 0.520699C9.19566 0.854097 9 1.30628 9 1.77778V6.22222C9 6.69372 9.19566 7.1459 9.54394 7.4793C9.89223 7.8127 10.3646 8 10.8571 8H20.1429C20.6354 8 21.1078 7.8127 21.4561 7.4793C21.8043 7.1459 22 6.69372 22 6.22222V1.77778C22 1.30628 21.8043 0.854097 21.4561 0.520699C21.1078 0.187301 20.6354 0 20.1429 0Z"
                  fill="url(#paint1_linear_4624_35246)"
                />
                <path
                  d="M20.2222 11.6667V18.3333H15.7778V11.6667H20.2222ZM20.2222 9H15.7778C15.3063 9 14.8541 9.28095 14.5207 9.78105C14.1873 10.2811 14 10.9594 14 11.6667V18.3333C14 19.0406 14.1873 19.7189 14.5207 20.219C14.8541 20.719 15.3063 21 15.7778 21H20.2222C20.6937 21 21.1459 20.719 21.4793 20.219C21.8127 19.7189 22 19.0406 22 18.3333V11.6667C22 10.9594 21.8127 10.2811 21.4793 9.78105C21.1459 9.28095 20.6937 9 20.2222 9Z"
                  fill="url(#paint2_linear_4624_35246)"
                />
                <path
                  d="M6.22222 1.77778V6.22222H1.77778V1.77778H6.22222ZM6.22222 0H1.77778C1.30628 0 0.854097 0.187301 0.520699 0.520699C0.187301 0.854097 0 1.30628 0 1.77778V6.22222C0 6.69372 0.187301 7.1459 0.520699 7.4793C0.854097 7.8127 1.30628 8 1.77778 8H6.22222C6.69372 8 7.1459 7.8127 7.4793 7.4793C7.8127 7.1459 8 6.69372 8 6.22222V1.77778C8 1.30628 7.8127 0.854097 7.4793 0.520699C7.1459 0.187301 6.69372 0 6.22222 0Z"
                  fill="url(#paint3_linear_4624_35246)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4624_35246"
                    x1="2.42144e-08"
                    y1="15"
                    x2="13"
                    y2="15"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EF843B" />
                    <stop offset="1" stopColor="#FFA567" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_4624_35246"
                    x1="9"
                    y1="4"
                    x2="22"
                    y2="4"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EF843B" />
                    <stop offset="1" stopColor="#FFA567" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_4624_35246"
                    x1="14"
                    y1="15"
                    x2="22"
                    y2="15"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EF843B" />
                    <stop offset="1" stopColor="#FFA567" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_4624_35246"
                    x1="1.49012e-08"
                    y1="4"
                    x2="8"
                    y2="4"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EF843B" />
                    <stop offset="1" stopColor="#FFA567" />
                  </linearGradient>
                </defs>
              </svg>
            }
          />

          <p>Spaces</p>
        </div>
      </Space>
      <Space direction="vertical" size={40}>
        <div className="iconClass">
          <Avatar
            shape="square"
            icon={
              <svg
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4995 16.396C16.5816 16.396 18.2695 14.7081 18.2695 12.626C18.2695 10.5438 16.5816 8.85596 14.4995 8.85596C12.4174 8.85596 10.7295 10.5438 10.7295 12.626C10.7295 14.7081 12.4174 16.396 14.4995 16.396Z"
                  stroke="url(#paint0_linear_4624_35254)"
                  strokeWidth="1.5"
                />
                <path
                  d="M4.37341 10.4268C6.75382 -0.0373638 22.2567 -0.0252802 24.6251 10.4389C26.0147 16.5772 22.1963 21.7731 18.8492 24.9872C16.4205 27.3314 12.578 27.3314 10.1372 24.9872C6.80216 21.7731 2.98382 16.5651 4.37341 10.4268Z"
                  stroke="url(#paint1_linear_4624_35254)"
                  strokeWidth="1.5"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4624_35254"
                    x1="10.7295"
                    y1="12.626"
                    x2="18.2695"
                    y2="12.626"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C39EFF" />
                    <stop offset="1" stopColor="#A576F3" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_4624_35254"
                    x1="4.08008"
                    y1="14.665"
                    x2="24.9184"
                    y2="14.665"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C39EFF" />
                    <stop offset="1" stopColor="#A576F3" />
                  </linearGradient>
                </defs>
              </svg>
            }
          />

          <p>Location</p>
        </div>
        <div className="iconClass">
          <Avatar
            shape="square"
            icon={
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.3594 13.6209C24.1031 13.3759 25.4456 11.8809 25.4494 10.0697C25.4494 8.28466 24.1481 6.80466 22.4419 6.52466"
                  stroke="url(#paint0_linear_4665_2536)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.6611 17.8129C26.3499 18.0654 27.5286 18.6566 27.5286 19.8754C27.5286 20.7141 26.9736 21.2591 26.0761 21.6016"
                  stroke="url(#paint1_linear_4665_2536)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.8589 18.3297C10.8414 18.3297 7.41016 18.9385 7.41016 21.3697C7.41016 23.7997 10.8202 24.426 14.8589 24.426C18.8764 24.426 22.3064 23.8235 22.3064 21.391C22.3064 18.9585 18.8977 18.3297 14.8589 18.3297Z"
                  stroke="url(#paint2_linear_4665_2536)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.8587 14.8599C17.495 14.8599 19.6325 12.7236 19.6325 10.0861C19.6325 7.44988 17.495 5.31238 14.8587 5.31238C12.2225 5.31238 10.085 7.44988 10.085 10.0861C10.075 12.7136 12.1962 14.8511 14.8237 14.8599L14.8587 14.8599Z"
                  stroke="url(#paint3_linear_4665_2536)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.3566 13.6209C5.6116 13.3759 4.27035 11.8809 4.2666 10.0697C4.2666 8.28466 5.56785 6.80466 7.2741 6.52466"
                  stroke="url(#paint4_linear_4665_2536)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.055 17.8129C3.36625 18.0654 2.1875 18.6566 2.1875 19.8754C2.1875 20.7141 2.7425 21.2591 3.64 21.6016"
                  stroke="url(#paint5_linear_4665_2536)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4665_2536"
                    x1="21.5308"
                    y1="10.4398"
                    x2="26.4071"
                    y2="10.7544"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF808F" />
                    <stop offset="1" stopColor="#C50018" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_4665_2536"
                    x1="23.8922"
                    y1="19.9032"
                    x2="28.3799"
                    y2="20.4063"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF808F" />
                    <stop offset="1" stopColor="#C50018" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_4665_2536"
                    x1="3.41563"
                    y1="21.6932"
                    x2="24.2871"
                    y2="29.2475"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF808F" />
                    <stop offset="1" stopColor="#C50018" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_4665_2536"
                    x1="7.52473"
                    y1="10.58"
                    x2="22.3297"
                    y2="12.7729"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF808F" />
                    <stop offset="1" stopColor="#C50018" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_4665_2536"
                    x1="3.438"
                    y1="10.4398"
                    x2="8.31436"
                    y2="10.7544"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF808F" />
                    <stop offset="1" stopColor="#C50018" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_4665_2536"
                    x1="1.41856"
                    y1="19.9032"
                    x2="5.90622"
                    y2="20.4063"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF808F" />
                    <stop offset="1" stopColor="#C50018" />
                  </linearGradient>
                </defs>
              </svg>
            }
          />

          <p>Groups</p>
        </div>
        <div className="iconClass">
          <Avatar
            shape="square"
            icon={
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1429 11V19H1.85714V11H11.1429ZM11.1429 9H1.85714C1.3646 9 0.892226 9.21071 0.543944 9.58579C0.195663 9.96086 0 10.4696 0 11V19C0 19.5304 0.195663 20.0391 0.543944 20.4142C0.892226 20.7893 1.3646 21 1.85714 21H11.1429C11.6354 21 12.1078 20.7893 12.4561 20.4142C12.8043 20.0391 13 19.5304 13 19V11C13 10.4696 12.8043 9.96086 12.4561 9.58579C12.1078 9.21071 11.6354 9 11.1429 9Z"
                  fill="url(#paint0_linear_4624_35246)"
                />
                <path
                  d="M20.1429 1.77778V6.22222H10.8571V1.77778H20.1429ZM20.1429 0H10.8571C10.3646 0 9.89223 0.187301 9.54394 0.520699C9.19566 0.854097 9 1.30628 9 1.77778V6.22222C9 6.69372 9.19566 7.1459 9.54394 7.4793C9.89223 7.8127 10.3646 8 10.8571 8H20.1429C20.6354 8 21.1078 7.8127 21.4561 7.4793C21.8043 7.1459 22 6.69372 22 6.22222V1.77778C22 1.30628 21.8043 0.854097 21.4561 0.520699C21.1078 0.187301 20.6354 0 20.1429 0Z"
                  fill="url(#paint1_linear_4624_35246)"
                />
                <path
                  d="M20.2222 11.6667V18.3333H15.7778V11.6667H20.2222ZM20.2222 9H15.7778C15.3063 9 14.8541 9.28095 14.5207 9.78105C14.1873 10.2811 14 10.9594 14 11.6667V18.3333C14 19.0406 14.1873 19.7189 14.5207 20.219C14.8541 20.719 15.3063 21 15.7778 21H20.2222C20.6937 21 21.1459 20.719 21.4793 20.219C21.8127 19.7189 22 19.0406 22 18.3333V11.6667C22 10.9594 21.8127 10.2811 21.4793 9.78105C21.1459 9.28095 20.6937 9 20.2222 9Z"
                  fill="url(#paint2_linear_4624_35246)"
                />
                <path
                  d="M6.22222 1.77778V6.22222H1.77778V1.77778H6.22222ZM6.22222 0H1.77778C1.30628 0 0.854097 0.187301 0.520699 0.520699C0.187301 0.854097 0 1.30628 0 1.77778V6.22222C0 6.69372 0.187301 7.1459 0.520699 7.4793C0.854097 7.8127 1.30628 8 1.77778 8H6.22222C6.69372 8 7.1459 7.8127 7.4793 7.4793C7.8127 7.1459 8 6.69372 8 6.22222V1.77778C8 1.30628 7.8127 0.854097 7.4793 0.520699C7.1459 0.187301 6.69372 0 6.22222 0Z"
                  fill="url(#paint3_linear_4624_35246)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4624_35246"
                    x1="2.42144e-08"
                    y1="15"
                    x2="13"
                    y2="15"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EF843B" />
                    <stop offset="1" stopColor="#FFA567" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_4624_35246"
                    x1="9"
                    y1="4"
                    x2="22"
                    y2="4"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EF843B" />
                    <stop offset="1" stopColor="#FFA567" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_4624_35246"
                    x1="14"
                    y1="15"
                    x2="22"
                    y2="15"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EF843B" />
                    <stop offset="1" stopColor="#FFA567" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_4624_35246"
                    x1="1.49012e-08"
                    y1="4"
                    x2="8"
                    y2="4"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EF843B" />
                    <stop offset="1" stopColor="#FFA567" />
                  </linearGradient>
                </defs>
              </svg>
            }
          />

          <p>Spaces</p>
        </div>
      </Space>
    </div>
  );
};

export default PostTag;
