import React from 'react';
import ReactDOM from 'react-dom';
import '../css/components/Modal.css';

const Modal = ({ isOpen, onClose }) => {

  if(!isOpen) {
    return null
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal--container">
        <button onClick={onClose} className="Modal--close-button">
            X
        </button>
        <h1>Are you sure about this purchase?</h1>
        <div className="Modal--Buttons">
          <button onClick={onClose} className="Modal--Button">Yes</button>
          <button onClick={onClose} className="Modal--Button">No</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;