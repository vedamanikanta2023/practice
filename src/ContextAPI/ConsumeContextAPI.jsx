import React from "react";
import { ThemeContext } from "./ThemeContext";

const ConsumeContextAPI = () => {
  const theme = React.useContext(ThemeContext);
  const onClickButton = () => {
    theme?.changeTheme();
  };
  return (
    <React.Fragment>
      <p>theme {theme.theme}</p>
      <button onClick={onClickButton}>Thme</button>
    </React.Fragment>
  );
};

export default ConsumeContextAPI;