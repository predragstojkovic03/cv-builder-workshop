const Modal = ({ children }) => {
  return (
    <div className='modalWrapper'>
      <div className='backdrop'></div>
      <div className='modalContainer'>
        <div className='modalHeader'></div>
        <div className='modalContent'>{children}</div>
        <div className='modalFooter'></div>
      </div>
    </div>
  );
};

export default Modal;
