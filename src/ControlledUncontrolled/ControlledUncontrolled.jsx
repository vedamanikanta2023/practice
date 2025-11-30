import React from "react";
import { ControlledComp } from "./ControlledComp"
import { Uncontrolled } from "./Uncontrolled"

export const ControlledUncontrolled  =()=>{
      const inputRef = React.useRef();

      const getInputValue=()=>{
        console.log("inputRef.current.value",inputRef.current.value);
      }

    return<div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
    <ControlledComp />
    <Uncontrolled inputRef={inputRef} />
    <button onClick={getInputValue}>Get Input value</button>
    </div>
}