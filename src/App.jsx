import { useState } from "react";
import { initialBoards } from "./data/initialBoards";
import BoardCard from "./components/BoardCard";
import AddBoardForm from "./components/AddBoardForm";

function App() {
  const [boards, setBoards] = useState(initialBoards);

  function addBoard(board) {
    setBoards(prevBoards => [board, ...prevBoards]);
  }

  function deleteBoard(id) {
    setBoards(prevBoards =>
      prevBoards.filter(board => board.id !== id)
    );
  }

  return (
    <main className="app">
      <h1>Список проектов</h1>

      <AddBoardForm onAdd={addBoard} />

      <div className="boards-container">
        {boards.map(board => (
          <BoardCard
            key={board.id}
            board={board}
            onDelete={deleteBoard}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
