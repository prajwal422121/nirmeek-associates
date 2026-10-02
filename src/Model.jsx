import React from "react";
import "./Project.css";

const Modal = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="Project" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
