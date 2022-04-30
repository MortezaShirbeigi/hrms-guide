import React, { useEffect, useState } from "react";
import { useLocation } from "@docusaurus/router";

const Root = ({ children }) => {
  const location = useLocation();
  const modalView = location.search.includes("?modal=true");
  const [isModal] = useState(modalView);

  useEffect(() => {
    if (location.hash) {
      document.querySelector(location.hash).scrollIntoView();
    }
  }, []);

  return <div className={isModal ? "modal-view" : "root"}>{children}</div>;
};

export default Root;
