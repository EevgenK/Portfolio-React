import { useCallback, MouseEvent, KeyboardEvent, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';
type ModalProps = {
  modalClose: () => void;
};
const modalRoot = document.querySelector('#modal-root') as HTMLElement;
const Modal = ({ modalClose }: ModalProps) => {
  const closeModal = useCallback(
    (e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget || ('key' in e && e.key === 'Escape')) {
        modalClose();
      }
    },
    [modalClose],
  );
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', modalClose);
    return () => {
      document.removeEventListener('keydown', modalClose);
      document.body.style.overflow = 'auto';
    };
  }, [modalClose]);
  return createPortal(
    <div className={s.overlay} onClick={closeModal}>
      <div className={s.modal}>
        <button className={s.btn} onClick={modalClose}>
          X
        </button>
        <NavBar close={modalClose} modal={'modal'} />
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
