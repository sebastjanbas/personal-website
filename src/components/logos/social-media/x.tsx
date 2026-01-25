import React from "react";

type sizeProps = {
  size : string
  fillColor: string
}
const XLogo = ({ size, fillColor }: sizeProps) => {
  return (
    <svg
      width="32"
      height="28"
      viewBox="0 0 32 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={size}
    >
      <path
        className={fillColor}
        d="M25.2019 0.596802H30.1087L19.3887 12.1937L32 27.9744H22.1254L14.3913 18.4035L5.54174 27.9744H0.631901L12.0981 15.5702L0 0.596802H10.1252L17.1162 9.34499L25.2019 0.596802ZM23.4797 25.1945H26.1987L8.64785 3.23067H5.73013L23.4797 25.1945Z"
      />
    </svg>
  );
};

export default XLogo;
