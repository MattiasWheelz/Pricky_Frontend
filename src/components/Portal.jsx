import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const mount = document.getElementById("popup-root");
  return mount ? createPortal(children, mount) : null;
};

export default Portal;
