import React from 'react';
import styles from './Modal.module.scss';
const Modal = ({ isOpen, onClose, details }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
        <h1>Something</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sit debitis voluptatum tempora quibusdam asperiores dolorem autem dolorum ad tenetur dolore quaerat officia, quidem molestiae architecto placeat, totam, nemo perferendis?</p>
        {details.img && <img src={details.img} alt={details.name} />}
      </div>
    </div>
  );
};

export default Modal;
