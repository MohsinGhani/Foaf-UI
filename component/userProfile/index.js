import { Form } from "antd";
import Router, { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { PatternContext } from "../../shared/helper";
import UserProfileCommon from "../nestedComponent/userProfile";
import Identify from "../nestedComponent/userProfile/identify";
import Interest from "../nestedComponent/userProfile/interest";
import Pattern from "../re-usabelComponent/common/pattern";

const steps = ["A", "B", "C", "D"];
const UserProfile = () => {
  const [activeStep, setActiveStep] = useState(1);

  const next = () => {
    setActiveStep(activeStep + 1);
  };
  const [form] = Form.useForm();
  const formData = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values, "formform");
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
