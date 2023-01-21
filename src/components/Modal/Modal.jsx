import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import propTypes from 'prop-types';
import css from "../Modal/Modal.module.css"

export const Modal = ({ onClose, largeImageURL }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [onClose]);

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) onClose();
  };

  
    return createPortal(
      <div className={css.Overlay} onClick={handleBackdrop}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt="modal" />
        </div>
      </div>,
      document.querySelector('#modalPortal')
    );
  }



// Modal.propTypes = {
//   largeImageURL: propTypes.string.isRequired,
// };