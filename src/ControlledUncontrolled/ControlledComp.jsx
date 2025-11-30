import React from "react";

export const ControlledComp = () => {
  const [value, setValue] = React.useState("");

  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
};
