import { useState } from "react";
export default (initValue, validator) => {
  const [value, setValue] = useState(initValue);
  const onChange = (event) => {
    //console.log(event.target);
    const {
      target: { value }
    } = event;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
