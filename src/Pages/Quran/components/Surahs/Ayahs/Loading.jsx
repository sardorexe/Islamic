import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <>
      <div className="loading">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Loading;
