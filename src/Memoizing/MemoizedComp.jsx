import React from "react";

// export const MemoizedComp =React.memo(({count})=>{
//     return<>
//     {console.log("rendering MemoizedComp")}
//     <h1>this is a memoized component</h1>
//     <p>{count}</p>;
//     </>
// })

export const MemoizedComp = ({ count }) => {
      console.log("rendering MemoizedComp");

  return (
    <>
      <h1>this is a memoized component</h1>
      <p>{count}</p>;
    </>
  );
};
