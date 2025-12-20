import React from "react";

function Toast({ show, message }) {
  if (!show) return null;

  return (
    <div className="toast-kboom">
      {message}
    </div>
  );
}

export default Toast;
