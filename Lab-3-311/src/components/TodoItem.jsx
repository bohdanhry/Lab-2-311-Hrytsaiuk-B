import React, { useState } from "react";

function TodoItem({ task, onDelete, onEdit }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    const trimmed = newText.trim();
    if (!trimmed) return;
    onEdit(task.id, trimmed);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${isCompleted ? "completed" : ""}`}>
      <label style={{ flex: 1 }}>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => setIsCompleted((s) => !s)}
        />

        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="edit-input"
          />
        ) : (
          <span className="todo-text">{task.text}</span>
        )}
      </label>

      {isEditing ? (
        <button onClick={handleSave} className="save-btn">
          Save
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)} className="edit-btn">
          Edit
        </button>
      )}

      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
