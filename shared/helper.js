import React from "react";

const MyContext = React.createContext({
  allData: "",
  setAllData: () => {},
});
const PatternContext = React.createContext({
  pattern: "",
  setPattern: () => {},
});
export { MyContext, PatternContext };

export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const phoneRegex = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;
// export const Password =
