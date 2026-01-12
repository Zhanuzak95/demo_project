function BoardCard({ board, onDelete }) {
  return (
    <div className="board-card">
      <h2 className="board-card__title">{board.title}</h2>

      <p className="board-card__description">
        {board.description}
      </p>

      <div className="board-card__footer">
        <span
          className={
            board.status === "active"
              ? "status-active"
              : "status-archived"
          }
        >
          {board.status}
        </span>

        <span>{board.createdAt}</span>
      </div>

      <button
        className="delete-button"
        onClick={() => onDelete(board.id)}
      >
        Удалить
      </button>
    </div>
  );
}

export default BoardCard;
