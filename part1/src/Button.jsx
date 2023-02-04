import React from "react";

const Button = ({ handleClick, text }) => {
  return (
    <div style={{ margin: "10px", display: "inline-grid" }}>
      <button
        onClick={handleClick}
        style={{
          width: "80px",
          height: "30px",
          backgroundColor: "orange",
          borderRadius: "5px",
          border: "2px solid blue",
          cursor: "pointer",
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
