import React, { useState } from "react";

export const ThemeContext = React.createContext("theme");

const ThemedComponent = ({ children }) => {
  const [theme, setTheme] = useState("light");
  console.log('calling themeing',theme)
  const changeTheme = ()=>{
    setTheme(prev=>prev==="dark"?"light":"dark");
  }
  return (
    <ThemeContext.Provider value={{theme,changeTheme}}>{children}</ThemeContext.Provider>
  );
};

export default ThemedComponent;
