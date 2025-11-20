import React from "react";

export default function PositionDemo() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>CSS Position Demo</h1>

      {/* STATIC */}
      <div style={sectionStyle}>
        <h2>1. position: static (default)</h2>
        <div style={{ ...boxStyle, position: "static", background: "#b3e5fc" }}>
          I am STATIC (no top/left allowed)
        </div>
      </div>

      {/* RELATIVE */}
      <div style={sectionStyle}>
        <h2>2. position: relative</h2>
        <div
          style={{
            ...boxStyle,
            position: "relative",
            top: "20px",
            left: "20px",
            background: "#ffe082",
          }}
        >
          I am RELATIVE (moves but space remains)
        </div>
      </div>

      {/* ABSOLUTE */}
      <div style={sectionStyle}>
        <h2>3. position: absolute</h2>

        <div
          style={{
            position: "relative",
            height: "150px",
            background: "#f3e5f5",
            border: "1px solid #ce93d8",
            padding: "20px",
          }}
        >
          Parent (position: relative)
          <div
            style={{
              ...boxStyle,
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "#ce93d8",
            }}
          >
            ABSOLUTE (inside positioned parent)
          </div>
        </div>
      </div>

      {/* FIXED */}
      <div style={sectionStyle}>
        <h2>4. position: fixed</h2>

        <div
          style={{
            ...boxStyle,
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "#ff8a80",
            zIndex: 999,
          }}
        >
          FIXED (sticks to viewport)
        </div>
        <p>Scroll the page and this red box will stay fixed!</p>
      </div>

      {/* STICKY */}
      <div style={sectionStyle}>
        <h2>5. position: sticky</h2>

        <div
          style={{
            ...boxStyle,
            position: "sticky",
            top: "0",
            background: "#a5d6a7",
          }}
        >
          STICKY (sticks when reaching top)
        </div>

        <p style={{ height: "300px" }}>
          Scroll down… This green box will stick to the top when it reaches it.
        </p>
      </div>
    </div>
  );
}

/* Shared styles */
const boxStyle = {
  padding: "12px 20px",
  border: "2px solid black",
  borderRadius: "6px",
  width: "fit-content",
};

const sectionStyle = {
  marginBottom: "80px",
};