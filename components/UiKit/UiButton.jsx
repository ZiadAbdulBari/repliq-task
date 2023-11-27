import React, { useEffect, useState } from "react";

const UiButton = ({buttonName,externalClass,onClick}) => {
  return (
    <>
      <button className={`${externalClass} py-[10px] px-[20px] rounded font-semibold text-[16px] text-gray-800`} onClick={onClick}>
        {buttonName}
      </button>
    </>
  );
};

export default UiButton;
