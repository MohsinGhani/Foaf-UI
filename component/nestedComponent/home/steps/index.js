import { Space } from "antd";
import React, { useState } from "react";
import { CommonButton } from "../../../re-usabelComponent/common/button";
import { EventData } from "../eventData";
import { Form } from "antd";
export default function Steps() {
  const [number, setNumber] = useState(1);

  const arrey = [
    { number: 2, title: "Location" },
    { number: 3, title: "Description" },
    { number: 4, title: "cover Photo" },
    { number: 5, title: "Preview" },
    ,
  ];
  console.log(number);

  const [form] = Form.useForm();

  const next = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values, "valuesssvaluesssvaluesssvaluesssvaluesss");
        let temp = form.getFieldsValue(true);
        console.log("temnp", temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="steps_main">
        <div className="steps_main_one">
          <div className="main2">
            <div className="stepOne2">
              <div className="round">1</div>
            </div>
          </div>
          {arrey.map((data, i) => (
            <div key={i} className={`main ${number > i + 1 && "color"}`}>
              <div className="vector"></div>
              <div className="stepOne">
                <div className="round">{data.number}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="steps_main_two">
          <p>Event Details</p>
          <p>Location</p>
          <p>Description</p>
          <p>Cover Photo</p>
          <p>Preview</p>
        </div>
      </div>
      <div className="event_data">
        <div>
          <Form name="basic" form={form} autoComplete="off">
            <EventData setNumber={setNumber} number={number} form={form} />
          </Form>
        </div>
        <div className="bottom_next">
          <Space>
            <div
              onClick={() => {
                number === 1 ? "" : setNumber(number - 1);
              }}
            >
              <CommonButton
                butText="back"
                className="back"
                number={number === 1 && true}
              />
            </div>
            <div onClick={() => {}}>
              <CommonButton
                onclick={() => {
                  next;
                  number === 5 ? "" : setNumber(number + 1);
                }}
                butText={
                  number === 4 ? "Preview" : number === 5 ? "Publish" : "next"
                }
                className="next"
              />
            </div>
          </Space>
        </div>
      </div>
    </>
  );
}
