import classes from './Modal.module.css';

function Modal({ children, onClose }) {
  return (
    <>
      {/* 빈 div는 백그라운드용, 백드롭 */}
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
