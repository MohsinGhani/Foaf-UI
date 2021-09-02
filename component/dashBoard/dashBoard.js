import { Layout, Menu, Breadcrumb } from "antd";

import { useState } from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Collapse } from "react-bootstrap";
import Logo from "../reusabelComponent/logoSvg";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function DashBoard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="layout">
      <Sider
        className="slider"
        collapsible
        collapsed={collapsed}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
      >
        <Logo />
        <Menu className="menu" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item
            key="1"
            icon={
              <svg
                width="50"
                height="48"
                viewBox="0 0 50 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="48" rx="12" fill="white" />
                <circle
                  cx="19.7664"
                  cy="23.7664"
                  r="8.98856"
                  stroke="#BFBFBF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.0181 30.4849L29.5421 33.9997"
                  stroke="#BFBFBF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          >
            <input type="text" placeholder={"search"} />
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={
              <svg
                width="50"
                height="40"
                viewBox="0 0 50 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="12"
                  fill="url(#paint0_linear)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.1572 28.7714V25.7047C17.1572 24.9246 17.7931 24.2908 18.581 24.2856H21.4671C22.2587 24.2856 22.9005 24.9209 22.9005 25.7047V28.7809C22.9003 29.4432 23.4343 29.9845 24.103 30H26.0271C27.9451 30 29.5 28.4607 29.5 26.5618V17.8378C29.4898 17.0908 29.1355 16.3893 28.538 15.933L21.9577 10.6853C20.8049 9.77157 19.1662 9.77157 18.0134 10.6853L11.462 15.9426C10.8623 16.397 10.5074 17.0997 10.5 17.8474V26.5618C10.5 28.4607 12.0549 30 13.9729 30H15.897C16.5824 30 17.138 29.4499 17.138 28.7714"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-2.06667"
                    y1="-6.87504"
                    x2="42.807"
                    y2="-6.00877"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FE5E71" />
                    <stop offset="1" stop-color="#FF3951" />
                  </linearGradient>
                </defs>
              </svg>
            }
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={
              <svg
                width="50"
                height="40"
                viewBox="0 0 50 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.0714 27.0699C24.0152 30.1263 19.4898 30.7867 15.7864 29.074C15.2397 28.8539 14.7915 28.676 14.3654 28.676C13.1785 28.683 11.7012 29.8339 10.9334 29.067C10.1656 28.2991 11.3173 26.8206 11.3173 25.6266C11.3173 25.2004 11.1464 24.7602 10.9263 24.2124C9.21283 20.5096 9.87411 15.9827 12.9303 12.9272C16.8316 9.02443 23.17 9.02443 27.0714 12.9262C30.9797 16.835 30.9727 23.1681 27.0714 27.0699Z"
                  stroke="#BFBFBF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.9393 20.4131H23.9483"
                  stroke="#BFBFBF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.9306 20.4131H19.9396"
                  stroke="#BFBFBF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.9213 20.4131H15.9303"
                  stroke="#BFBFBF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          >
            Messages
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={
              <svg
                width="50"
                height="40"
                viewBox="0 0 50 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.8877 18.8967C27.2827 18.7007 28.3567 17.5047 28.3597 16.0557C28.3597 14.6277 27.3187 13.4437 25.9537 13.2197"
                  stroke="#BFBFBF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M27.7285 22.2505C29.0795 22.4525 30.0225 22.9255 30.0225 23.9005C30.0225 24.5715 29.5785 25.0075 28.8605 25.2815"
                  stroke="#BFBFBF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.8867 22.6641C16.6727 22.6641 13.9277 23.1511 13.9277 25.0961C13.9277 27.0401 16.6557 27.5411 19.8867 27.5411C23.1007 27.5411 25.8447 27.0591 25.8447 25.1131C25.8447 23.1671 23.1177 22.6641 19.8867 22.6641Z"
                  stroke="#BFBFBF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.8869 19.888C21.9959 19.888 23.7059 18.179 23.7059 16.069C23.7059 13.96 21.9959 12.25 19.8869 12.25C17.7779 12.25 16.0679 13.96 16.0679 16.069C16.0599 18.171 17.7569 19.881 19.8589 19.888H19.8869Z"
                  stroke="#BFBFBF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.8851 18.8967C12.4891 18.7007 11.4161 17.5047 11.4131 16.0557C11.4131 14.6277 12.4541 13.4437 13.8191 13.2197"
                  stroke="#BFBFBF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.044 22.2505C10.693 22.4525 9.75 22.9255 9.75 23.9005C9.75 24.5715 10.194 25.0075 10.912 25.2815"
                  stroke="#BFBFBF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          >
            Groups
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={
              <svg
                width="50"
                height="40"
                viewBox="0 0 50 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.5 18.5005C22.5 17.1192 21.3808 16 20.0005 16C18.6192 16 17.5 17.1192 17.5 18.5005C17.5 19.8808 18.6192 21 20.0005 21C21.3808 21 22.5 19.8808 22.5 18.5005Z"
                  stroke="#BFBFBF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.9995 29C18.801 29 12.5 23.8984 12.5 18.5633C12.5 14.3866 15.8571 11 19.9995 11C24.1419 11 27.5 14.3866 27.5 18.5633C27.5 23.8984 21.198 29 19.9995 29Z"
                  stroke="#BFBFBF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          >
            Location
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={
              <svg
                width="50"
                height="40"
                viewBox="0 0 50 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 25.8476C25.6392 25.8476 28.2481 25.1242 28.5 22.2205C28.5 19.3188 26.6812 19.5054 26.6812 15.9451C26.6812 13.1641 24.0452 10 20 10C15.9548 10 13.3188 13.1641 13.3188 15.9451C13.3188 19.5054 11.5 19.3188 11.5 22.2205C11.753 25.1352 14.3618 25.8476 20 25.8476Z"
                  stroke="#BFBFBF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.3889 28.8574C21.0247 30.3721 18.8967 30.3901 17.5195 28.8574"
                  stroke="#BFBFBF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          >
            Notification
          </Menu.Item>
          <Menu.Item
            key="7"
            icon={
              <svg
                width="50"
                height="40"
                viewBox="0 0 50 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.8064 15.6234L28.184 14.5433C27.6574 13.6294 26.4905 13.3141 25.5753 13.8385V13.8385C25.1397 14.0951 24.6198 14.1679 24.1305 14.0408C23.6411 13.9138 23.2224 13.5973 22.9666 13.1611C22.8021 12.8839 22.7137 12.5682 22.7103 12.2458V12.2458C22.7251 11.729 22.5302 11.2282 22.1698 10.8574C21.8094 10.4867 21.3143 10.2776 20.7973 10.2778H19.5433C19.0367 10.2778 18.5511 10.4797 18.1938 10.8387C17.8364 11.1977 17.6369 11.6843 17.6394 12.1909V12.1909C17.6244 13.2367 16.7722 14.0766 15.7263 14.0765C15.404 14.0731 15.0882 13.9847 14.811 13.8202V13.8202C13.8958 13.2958 12.7289 13.6111 12.2023 14.525L11.5341 15.6234C11.0082 16.5361 11.3192 17.7024 12.2298 18.2321V18.2321C12.8217 18.5738 13.1863 19.2053 13.1863 19.8888C13.1863 20.5723 12.8217 21.2038 12.2298 21.5456V21.5456C11.3203 22.0717 11.009 23.2351 11.5341 24.1451V24.1451L12.1657 25.2344C12.4124 25.6795 12.8264 26.0081 13.3159 26.1472C13.8055 26.2863 14.3304 26.2247 14.7744 25.9758V25.9758C15.2108 25.7211 15.7309 25.6513 16.2191 25.782C16.7072 25.9126 17.123 26.2328 17.3739 26.6714C17.5385 26.9486 17.6269 27.2644 17.6302 27.5868V27.5868C17.6302 28.6433 18.4867 29.4998 19.5433 29.4998H20.7973C21.8502 29.4998 22.7053 28.6489 22.7103 27.5959V27.5959C22.7079 27.0878 22.9086 26.5998 23.2679 26.2405C23.6272 25.8812 24.1152 25.6804 24.6233 25.6829C24.9449 25.6915 25.2594 25.7795 25.5387 25.9392V25.9392C26.4515 26.4651 27.6177 26.1541 28.1474 25.2435V25.2435L28.8064 24.1451C29.0615 23.7073 29.1315 23.1858 29.001 22.6961C28.8704 22.2065 28.55 21.7891 28.1108 21.5364V21.5364C27.6715 21.2837 27.3511 20.8663 27.2206 20.3767C27.09 19.8871 27.16 19.3656 27.4151 18.9277C27.581 18.6381 27.8211 18.398 28.1108 18.2321V18.2321C29.0159 17.7026 29.3262 16.5432 28.8064 15.6325V15.6325V15.6234Z"
                  stroke="#BFBFBF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="20.1747"
                  cy="19.8886"
                  r="2.63616"
                  stroke="#BFBFBF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          >
            Setting
          </Menu.Item>
          <Menu.Item
            key="8"
            icon={
              <svg
                width="50"
                height="40"
                viewBox="0 0 50 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g filter="url(#filter0_d)">
                  <g clip-path="url(#clip0)">
                    <path
                      d="M8 16C8 11.5817 11.5817 8 16 8H24C28.4183 8 32 11.5817 32 16V24C32 28.4183 28.4183 32 24 32H16C11.5817 32 8 28.4183 8 24V16Z"
                      fill="#F7F7F7"
                    />
                    <rect
                      x="7.6001"
                      y="2"
                      width="24.8"
                      height="36"
                      fill="url(#pattern0)"
                    />
                  </g>
                  <path
                    d="M16 8.5H24V7.5H16V8.5ZM31.5 16V24H32.5V16H31.5ZM24 31.5H16V32.5H24V31.5ZM8.5 24V16H7.5V24H8.5ZM16 31.5C11.8579 31.5 8.5 28.1421 8.5 24H7.5C7.5 28.6944 11.3056 32.5 16 32.5V31.5ZM31.5 24C31.5 28.1421 28.1421 31.5 24 31.5V32.5C28.6944 32.5 32.5 28.6944 32.5 24H31.5ZM24 8.5C28.1421 8.5 31.5 11.8579 31.5 16H32.5C32.5 11.3056 28.6944 7.5 24 7.5V8.5ZM16 7.5C11.3056 7.5 7.5 11.3056 7.5 16H8.5C8.5 11.8579 11.8579 8.5 16 8.5V7.5Z"
                    fill="#F7F7F7"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="3.5"
                    y="3.5"
                    width="33"
                    height="33"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      //   xlink:href="#image0"
                      transform="translate(0 -0.0466102) scale(0.003125 0.00217161)"
                    />
                  </pattern>
                  <clipPath id="clip0">
                    <path
                      d="M8 16C8 11.5817 11.5817 8 16 8H24C28.4183 8 32 11.5817 32 16V24C32 28.4183 28.4183 32 24 32H16C11.5817 32 8 28.4183 8 24V16Z"
                      fill="white"
                    />
                  </clipPath>
                  <image
                    id="image0"
                    width="320"
                    height="480"
                    // xlink:href="data:image/jpeg;base64,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"
                  />
                </defs>
              </svg>
            }
          >
            Profile
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header
          //   className="site-layout-background"
          className="header"
          style={{ padding: 0 }}
        />

        <Content className="container">
          <div className="page">
            <h1>hello</h1>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
