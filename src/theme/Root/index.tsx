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

    if (isModal) document.querySelector("#root").classList.add("modal-view");
    else document.querySelector("#root").classList.add("root");
  }, []);

  console.log("isModal : ", isModal);

  return (
    <div className="hidden" id="root">
      {children}
    </div>
  );
};

export default Root;
