import "./Modal.css";
function Modal({ modalName , todoCancel,todoConfirm}) {
 
 
  return (
    <>
      <div className="modal">
            <p className="modal__title">Delete?</p>
        <div className="modal__buttons">
          <button
            className="btn btn__cancel"
            onClick={todoCancel}
          >
            Cancel
          </button>
          <button className="btn" onClick={todoConfirm}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
