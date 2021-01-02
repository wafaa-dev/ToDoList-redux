import React, { useState} from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { edit } from "../Redux/Actions/TodoActions";

const MyStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EditTodo = ({ el }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editText, setEditText] = useState(el.text);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const dispatch = useDispatch();
  const editt= () => {
    dispatch(edit({ index: el.id, editedText: editText }));
    closeModal();
  };
  return (
    <div>
      <button className="btn" onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 48 48"
          version="1.1"
        >
          <g id="surface7246542">
            <path
              style={{ fill: "#7c7c7c" }}
              d="M 36 4 L 31.171875 8.828125 L 39.171875 16.828125 L 44 12 Z M 28.152344 11.847656 L 6 34 L 6 42 L 14 42 L 36.152344 19.847656 Z M 28.152344 11.847656 "
            />
          </g>
        </svg>
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={MyStyle}
        contentLabel="Example Modal"
      >
        <input
          id="ModalInput"
          type="text"
          placeholder="Edit to do..."
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <button className="Modal-Btn" onClick={editt}>
          Save changes
        </button>
        <button className="Modal-Btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default EditTodo;