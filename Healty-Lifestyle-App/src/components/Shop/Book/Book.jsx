import "./Book.css";

function Books({ title, purchase, image, onAdd, onDelete }) {
  return (
    <div className="props">
      <img src={image} alt={title} width="100" />
      <h3>{title}</h3>
      <p>{purchase}</p>
      <button className="add-delete-buttons" onClick={onAdd}>
        Add
      </button>
      <hr />

      <button className="add-delete-buttons" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default Books;
