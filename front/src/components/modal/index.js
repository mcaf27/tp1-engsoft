import ReactModal from 'react-modal';
import { MdClose } from 'react-icons/md';

const Modal = ({ open, handleClose, children, ...rest }) => {
  ReactModal.setAppElement('#root');
  return (
    <ReactModal
      isOpen={open}
      onRequestClose={handleClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          maxWidth: '40vw',
          margin: 'auto',
          height: 'fit-content',
          padding: '3rem',
          color: 'var(--dark)',
          backgroundColor: 'var(--light)',
          boxShadow: '0 0 3rem 1rem rgba(0,0,0,0.8)',
          borderRadius: '1rem',
        },
      }}
      {...rest}
    >
      <MdClose
        style={{
          position: 'absolute',
          right: '0.5rem',
          top: '0.5rem',
          cursor: 'pointer',
          fontSize: '1.5rem',
        }}
        onClick={handleClose}
      />
      {children}
    </ReactModal>
  );
};

export default Modal;
