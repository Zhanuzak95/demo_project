import { useState } from "react";

function AddBoardForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("active");

  function handleSubmit(event) {
    event.preventDefault();

    const newBoard = {
      id: Date.now(),
      title,
      description,
      status,
      createdAt: new Date().toISOString().slice(0, 10)
    };

    onAdd(newBoard);

    setTitle("");
    setDescription("");
    setStatus("active");
  }

  return (
    <form className="add-board-form" onSubmit={handleSubmit}>
      <h2>Добавить проект</h2>

      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Описание"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />

      <select
        value={status}
        onChange={e => setStatus(e.target.value)}
      >
        <option value="active">active</option>
        <option value="archived">archived</option>
      </select>

      <button type="submit">Добавить</button>
    </form>
  );
}

export default AddBoardForm;
