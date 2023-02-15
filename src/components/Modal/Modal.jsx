import './Modal.css';

const Modal = ({ header, children, setModalState }) => {
  const closeModal = () => {
    setModalState((previousState) => {
      return { ...previousState, isOpen: false };
    });
  };

  return (
    <div className='modalWrapper flex justify-content-center align-items-center'>
      <div className='backdrop' onClick={closeModal}></div>
      <div className='modalContainer'>
        <div className='modalHeader'>
          <h3>{header}</h3>
        </div>
        <div className='modalContent'>{children}</div>
        <div className='modalFooter'>
          <button
            type='button'
            className='btn btn-primary'
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
