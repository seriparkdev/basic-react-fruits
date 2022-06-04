import { useRef } from "react";

function Modal(props) {
  const enteredName = useRef();
  const enteredImg = useRef();
  const enteredContent = useRef();

  function onSubmit(e) {
    e.preventDefault();
    const item = {
      name: enteredName.current.value,
      image: enteredImg.current.value,
      content: enteredContent.current.value,
    };
    props.addItemHandler(item);
    props.closeModalHandler();
  }


  return (
    <>
      <div
        className="modalOverlay"
        id="modal"
        onClick={props.closeModalHandler}
      ></div>
      <form className="modal" id="addForm" onSubmit={onSubmit}>
        <span
          className="xButton"
          id="xButton"
          onClick={props.closeModalHandler}
        >
          X
        </span>
        <label htmlFor="name" className="label">
          이름
        </label>
        <input
          type="text"
          id="name"
          placeholder="바나나"
          className="input"
          required
          ref={enteredName}
        />
        <label htmlFor="image" className="label">
          이미지
        </label>
        <input
          type="text"
          id="image"
          placeholder="URL"
          className="input"
          required
          ref={enteredImg}
        />
        <label htmlFor="content" className="label">
          내용
        </label>
        <input
          type="text"
          id="content"
          placeholder="얼려먹으면 맛있는 바나나"
          className="input"
          required
          ref={enteredContent}
        />
        <button type="submit" className="submitbtn">
          저장
        </button>
      </form>
    </>
  );
}

export default Modal;
