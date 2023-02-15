import './Modal.css';

const Modal = ({ header, children, setModalOpen }) => {
  return (
    <div className='modalWrapper flex justify-content-center align-items-center'>
      <div className='backdrop' onClick={() => setModalOpen(false)}></div>
      <div className='modalContainer'>
        <div className='modalHeader'>
          <h3>{header}</h3>
        </div>
        <div className='modalContent'>{children}</div>
        <div className='modalFooter'>
          <button
            type='button'
            className='btn btn-primary'
            onClick={() => setModalOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
