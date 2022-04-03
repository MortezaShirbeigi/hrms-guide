import React, { useEffect } from "react";

export const Root = ({ children }) => {
  const modalView = location.href.includes("?modal=true");

  return <div className={modalView ? "modal-view" : "root"}>{children}</div>;
};

export default Root;
