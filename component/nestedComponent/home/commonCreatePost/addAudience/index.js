import { Form, Space } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Image from "next/image";
import React from "react";

const PostAudience = () => {
  return (
    <div className="audience_main">
      <Form name="audience">
        <p className="textOne">Who can see your post?</p>
        <p>
          Your Post will appear in news feed, on your profile and in search
          results
        </p>
        <Space size={50}>
          <Space className="public" direction="vertical">
            <Form.Item name="Public">
              <Space size={20}>
                <Avatar
                  shape="square"
                  icon={
                    <Image
                      src="/images/addinPost/public.svg"
                      alt="icon"
                      layout="fill"
                    />
                  }
                />
                <Space direction="vertical" size={0} className="Main_text">
                  <p className="textOne">Public</p>
                  <p className="textTwo">Anyone on or off FOAF</p>
                </Space>

                <div className="icon"></div>
              </Space>
            </Form.Item>

            <Form.Item name="Public">
              <Space size={20}>
                <Avatar
                  shape="square"
                  icon={
                    <Image
                      src="/images/addinPost/friends.svg"
                      alt="icon"
                      layout="fill"
                    />
                  }
                />
                <Space direction="vertical" size={0} className="Main_text">
                  <p className="textOne">Friends</p>
                  <p className="textTwo">Your Friends on FOAF</p>
                </Space>

                <div className="icon"></div>
              </Space>
            </Form.Item>
            <Space size={20}>
              <Avatar
                shape="square"
                icon={
                  <Image
                    src="/images/addinPost/friends_except.svg"
                    alt="icon"
                    layout="fill"
                  />
                }
              />
              <Space direction="vertical" size={0} className="Main_text">
                <p className="textOne">Friends except...</p>
                <p className="textTwo">Don’t show some friends</p>
              </Space>

              <div className="icon"></div>
            </Space>
          </Space>
          <Space className="public" direction="vertical" size={33}>
            <Space size={20}>
              <Avatar
                shape="square"
                icon={
                  <Image
                    src="/images/addinPost/specific_friend.svg"
                    alt="icon"
                    layout="fill"
                  />
                }
              />
              <Space direction="vertical" size={0} className="Main_text">
                <p className="textOne">Specific Friend</p>
                <p className="textTwo">Only show to some friends</p>
              </Space>

              <div className="icon"></div>
            </Space>
            <Space size={20}>
              <Avatar
                shape="square"
                icon={
                  <Image
                    src="/images/addinPost/onlyme.svg"
                    alt="icon"
                    layout="fill"
                  />
                }
              />
              <Space direction="vertical" size={0} className="Main_text">
                <p className="textOne">Only me</p>
                <p className="textTwo">Anyone on or off FOAF</p>
              </Space>

              <div className="icon"></div>
            </Space>
            <Space size={20}>
              <Avatar
                shape="square"
                icon={
                  <Image
                    src="/images/addinPost/custom.svg"
                    alt="icon"
                    layout="fill"
                  />
                }
              />
              <Space direction="vertical" size={0} className="Main_text">
                <p className="textOne">Custom</p>
                <p className="textTwo">Include and exclude friends </p>
              </Space>

              <div className="icon"></div>
            </Space>
          </Space>
        </Space>
      </Form>
    </div>
  );
};

export default PostAudience;
