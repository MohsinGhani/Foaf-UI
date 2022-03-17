import { Space } from "antd";
import React, { useState } from "react";
import { CommonButton } from "../../../re-usabelComponent/common/button";
import { EventData } from "../eventData";
import { Form } from "antd";
import { useSelector } from "react-redux";
import { MyContext } from "../../../../shared/helper";
import { API } from "../../../../pages/api/create";
import { useRouter } from "next/router";
export default function Steps() {
  const statedata = useSelector((state) => state);
  var data = statedata?.user?.userDetailes?.result?.user;
  const [number, setNumber] = useState(1);
  const [allData, setAllData] = useState(null);
  const router = useRouter();
  const arrey = [
    { number: 2, title: "Location" },
    { number: 3, title: "Description" },
    { number: 4, title: "cover Photo" },
    { number: 5, title: "Preview" },
    ,
  ];

  const [form] = Form.useForm();

  const next = () => {
    form
      .validateFields()
      .then((values) => {
        number === 5 ? "" : setNumber(number + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const publish = async () => {
    let formData = new FormData();
    formData.append("event_name", allData?.data?.event_name);
    formData.append("start_date", "10/25/2021");
    formData.append("end_date", "10/25/2021");
    formData.append("start_time", "11:06:22");
    formData.append("end_time", "11:06:22");
    formData.append("location", "");
    formData.append("access", "Public");
    formData.append("cover_photo", allData?.imageFile);
    formData.append("expired_at", "10/25/2021 11:06:22");
    formData.append("event_access", "Public");
    formData.append("interested", "[]");
    formData.append("going", "[]");
    formData.append("invited", "[]");
    formData.append("event_object", "{}");
    formData.append("liked_by", "[]");
    try {
      let response = await fetch(`${API.CREATE_EVENT}`, {
        method: "POST",
        headers: {
          Authorization: `Token ${data.token}`,
        },
        body: formData,
      });
      const createEvent = await response.json();
      router.push("/");
      console.log(createEvent, "createEvent");
    } catch (err) {
      console.log(err), "error ";
    }
    console.log("allData", allData);
  };
  const value = { allData, setAllData };
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
            <MyContext.Provider value={value}>
              <EventData setNumber={setNumber} number={number} form={form} />
            </MyContext.Provider>
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
                  number === 5 ? publish() : next();
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
