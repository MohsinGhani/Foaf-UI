import React, { useEffect, useState } from "react";
import { Form, Input } from "antd";
import Image from "next/image";

export const Description = ({ heading, setHeading, form }) => {
  useEffect(() => {
    setHeading(heading);
  }, [heading, setHeading]);
  const { TextArea } = Input;
  const [classChange, setClassChange] = useState("");
  return (
    <div className="description">
      <p>
        Provide more information about your event so that guests know what to
        expect.
      </p>
      <div className="description_text_main">
        <p className={`text ${classChange}`}>Description </p>
        <Form name="location" form={form} autoComplete="off">
          <div className="description_text">
            <Form.Item name="description">
              <TextArea
                autoSize={{ minRows: 5, maxRows: 7 }}
                onBlur={() => {
                  setClassChange("");
                }}
                onClick={() => {
                  setClassChange("discription_text");
                }}
              />
            </Form.Item>
            <div className="text_image">
              <Image
                src="/images/CreatePost/description.png"
                width="24"
                height="24"
                alt="pic"
                layout="fixed"
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
