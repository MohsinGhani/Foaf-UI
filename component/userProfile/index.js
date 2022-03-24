import { Form } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API } from "../../pages/api/userProfile";
import UserProfileCommon from "../nestedComponent/userProfile";
import Interest from "../nestedComponent/userProfile/interest";
import Pattern from "../re-usabelComponent/common/pattern";

const steps = ["A", "B", "C", "D"];
const UserProfile = () => {
  const [activeStep, setActiveStep] = useState(1);
  const statedata = useSelector((state) => state);
  var data = statedata?.user?.userDetailes?.result?.user;
  const next = () => {
    setActiveStep(activeStep + 1);
  };
  const skip = () => {
    setActiveStep(activeStep + 1);
  };

  const [form] = Form.useForm();
  const formData = () => {
    form
      .validateFields()
      .then(async (values) => {
        console.log(values.interests, "formform");
        if (values.interests.length) {
          console.log(values.interests, "under");
          let formData = new FormData();
          formData.append("interests", values?.interests);
          try {
            let response = await fetch(
              "https://dev-foaf-backend.com/api/add_interests",
              {
                method: "POST",
                headers: {
                  Authorization: `Token ${data?.token}`,
                },
                body: formData,
              }
            );
            const verification = await response.json();

            if (verification?.status === 200 || verification?.status === 201) {
              console.log("true");
            } else {
              alert(verification?.message);
            }
          } catch (err) {
            console.log(err), "error ";
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const _renderParentComp = () => {
    switch (activeStep) {
      case 1:
      case 2:
      case 3:
        return (
          <Pattern
            child={
              <UserProfileCommon
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                next={next}
                skip={skip}
              />
            }
          />
        );
      case 4:
        return <Interest formData={formData} />;
    }
  };

  return (
    <div>
      <Form name="userDetails" layout="verticle" form={form}>
        {_renderParentComp()}
      </Form>
    </div>
  );
};

export default UserProfile;
