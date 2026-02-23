import "./Modal.css";
function Modal({ ModalName , todoCancel}) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{ModalName}Delete?</p>
        <div className="modal__buttons">
          <button
            className="btn btn__cancel"
            onClick={todoCancel}
          >
            Cancel
          </button>
          <button className="btn" onClick={() => console.log("confirm")}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
