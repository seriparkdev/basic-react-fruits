function Modal(props) {
 

    
    return(
        <>
        <div className="modalOverlay" id="modal" onClick={props.closeModalHandler}></div>
        <form className="modal" id="addForm">
            <span className="xButton" id="xButton" onClick={props.closeModalHandler}>X</span>
            <label htmlFor="name" className="label">이름</label>
            <input type="text" id="name" placeholder="바나나" className="input" required/>
            <label htmlFor="image" className="label">이미지</label>
            <input type="text" id="image" placeholder="URL" className="input" required />
            <label htmlFor="content" className="label">내용</label>
            <input type="text" id="content" placeholder="얼려먹으면 맛있는 바나나" className="input" required/>
            <button type="submit" className="submitbtn">저장</button>
        </form>
        </>
    );
}

export default Modal;