import React from "react";
import { Link } from "react-router-dom";
import "./modal.scss";

export const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal-container"
      >
        <h6>
          You'll cancel creating the account. Are you sure you want to continue?
        </h6>
        <div className="button-section">
          <button className="close-button" onClick={onClose}>
            No
          </button>
          <Link to="/">
            <button className="continue-button">Yes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
