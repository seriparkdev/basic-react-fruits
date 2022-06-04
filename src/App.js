import Modal from "./Modal";
import { useState } from "react";

function App() {
  const data = [
    {
      name: "복숭아",
      image: "./img/복숭아.jpg",
      content: "달달한 복숭아",
    },

    {
      name: "포도",
      image: "./img/포도.jpg",
      content: "맛있는 포도",
    },

    {
      name: "청사과",
      image: "./img/청사과.png",
      content: "시원한 청사과",
    },

    {
      name: "파인애플",
      image: "img/파인애플.jpg",
      content: "신 파인애플",
    },

    {
      name: "딸기",
      image: "img/딸기.jpg",
      content: "달콤한 딸기",
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [items, setItems] = useState(data);

  function openModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  function addItemHandler(item) {
    setItems([...items, item]);
  }

  return (
    <>
      <header>
        <div id="title">🧺FRUIT</div>
      </header>
      <main>
        <aside id="sidebar">
          <button
            type="button"
            className="addButton"
            id="addButton"
            onClick={openModalHandler}
          >
            추가
          </button>
          {items.map((item) => (
            <span key={item.name}>{item.name}</span>
          ))}
        </aside>

        <section id="container">
          {items.map((item) => (
            <div className="item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <span>{item.content}</span>
            </div>
          ))}
        </section>

        {modalIsOpen && 
          <Modal
            addItemHandler={addItemHandler}
            openModalHandler={openModalHandler}
            closeModalHandler={closeModalHandler}
          />
        }
      </main>
    </>
  );
}

export default App;
