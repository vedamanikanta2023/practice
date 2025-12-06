import "./App.css";
// import { UserDetails } from "./UserDetails";
import { Sample } from "./Sample";
import Alert from "./Alert";
import { MetaData } from "./MetaData";
import Component1 from "./Components";
import ImageViewer from "./ImageViewer";
import Header from "./Header";
import PositionDemo from "./PositionDemo";
import { Timer } from "./Timer";
import Parent from "./ParentComponent";
import { ControlledUncontrolled } from "./ControlledUncontrolled/ControlledUncontrolled";
import { MemoizedComp } from "./Memoizing/MemoizedComp";
import { CallingMemoizedComp } from "./Memoizing/CallingMemoizedComp";
import ThemedComponent, { ThemeContext } from "./ContextAPI/ThemeContext";
import ConsumeContextAPI from "./ContextAPI/ConsumeContextAPI";
import React from "react";
import Form from "./ActionsAPI/ActionsAPI";
import User from "./Use/Use";

import { Suspense } from "react";
import { TodosList } from "./TodosList";
// import ConsumeHOC from "./HOC/ConsumeHOC";
import { UserDetails } from "./UserDetails/UserDetails";

const shoeCollections = [];
for (let i = 0; i < 100; i++) {
  shoeCollections.push("mani");
}

function App() {
  try {
    const not = "";
    console.log(not);
  } catch (error) {
    console.warn(`in catch block `, error);
  }

  const theme = React.useContext(ThemeContext);

  const getTheme = () => {
    if (theme.theme === "dark") {
      return {
        backgroundColor: "black",
        color: "white",
      };
    } else {
      return { backgroundColor: "white", color: "black" };
    }
  };

  return (
    <ThemedComponent>
      <div style={getTheme()}>
<UserDetails />
        {/* <ConsumeHOC /> */}
        {/* <TodosList /> */}
        {/* <Suspense fallback={<h2>Loading...</h2>}>
          <User />
        </Suspense> */}
        {/* <Form /> */}
        {/* <ConsumeContextAPI /> */}
        {/* <CallingMemoizedComp /> */}
        {/* <ControlledUncontrolled /> */}
        {/* <Parent /> */}
        {/* <Timer /> */}
        {/* <PositionDemo />
    <Header />
    <div className="gallery-grid">
      {shoeCollections.map((collection, index) => (
        <ImageViewer />
      ))}
    </div> */}
        {/* <ImageViewer /><ImageViewer /><ImageViewer /><ImageViewer /><ImageViewer /><ImageViewer /><ImageViewer /><ImageViewer /><ImageViewer /><ImageViewer /><ImageViewer /> */}
        {/* <ShoeStore /> */}
        {/* <Component1 /> */}
        {/* <MetaData /> */}
        {/* <Alert type="success" message={"Your payment is successful"} /> */}
        {/* <UserDetails />    */}
        {/* <Sample />  */}{" "}
      </div>
    </ThemedComponent>
  );
}

export default App;
