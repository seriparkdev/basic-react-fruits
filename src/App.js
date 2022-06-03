import Modal from "./Modal";
import { useState } from "react";

function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
    
  function openModalHandler() {
      setModalIsOpen(true);
  }

  function closeModalHandler() {
      setModalIsOpen(false);
  }


  return (
    <div>
    <header>
        <div id="title">🧺FRUIT</div>
    </header>
    <main>
    <aside id="sidebar">
        <button type="button" className="addButton" id="addButton" onClick={openModalHandler}>추가</button>
        <span>복숭아</span>
        <span>포도</span>
        <span>청사과</span>
        <span>파인애플</span>
        <span>딸기</span>
    </aside>
    <section id="container">
        <div className="item">
            <img src="./img/복숭아.jpg" alt="복숭아" />
            <span>달달한 복숭아</span>
        </div>
        <div className="item">
            <img src="./img/포도.jpg" alt="포도" />
            <span>맛있는 포도</span>
        </div>
        <div className="item">
            <img src="img/청사과.png" alt="청사과" />
            <span>시원한 청사과</span>
        </div>
        <div className="item">
            <img src="img/파인애플.jpg" alt="파인애플" />
            <span>신 파인애플</span>
        </div>
        <div className="item">
            <img src="img/딸기.jpg" alt="딸기" />
            <span>달콤한 딸기</span>
        </div>
    </section>
    
    { modalIsOpen && <Modal modalIsOpen={modalIsOpen} openModalHandler={openModalHandler} closeModalHandler={closeModalHandler}/> }

        
    </main>
    </div>
  );
}

export default App;
