import React from "react";
import ControlledInput from "./ControlledInput";

const ControlledInputForm = () => {
  const [value, setValue] = React.useState<string>("");
  return (
    <ControlledInput
      type="text"
      placeholder="Insert some text here..."
      value={value}
      onValueChange={setValue}
    />
  );
};

export default ControlledInputForm;
