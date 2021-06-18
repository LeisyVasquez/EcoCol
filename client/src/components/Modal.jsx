import React from "react";

const Modal = ({ showModal, setShowModal }) => {
    return (
        <>
        {showModal ? <div>I'm the modal</div> : null}
        </>
    )
}

export default Modal;