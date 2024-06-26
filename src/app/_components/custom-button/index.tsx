"use client"

import "./custom-button.css";

const CustomButton = ({
  text,
  isContained = true,
  onClick = () => console.log("clicked")
}: {text: string, isContained?: boolean, onClick?: () => void}) => {
  return (
    <>
      {isContained ? (
        <button className="contained" onClick={onClick}>
          <span className="btn-span">{text}</span>
        </button>
      ) : (
        <button className="outlined" onClick={onClick}>
          <span className="btn-span">{text}</span>
        </button>
      )}
    </>
  );
};

export default CustomButton;
