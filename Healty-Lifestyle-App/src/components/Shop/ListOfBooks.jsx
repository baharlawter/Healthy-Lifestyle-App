function Books(props) {
  return (
    <div
      className="props"
      style={{ cursor: "pointer" }}
      onClick={() => window.open(props.link, "_blank")}
    >
      <p>{props.title}</p>
      <p>{props.purchase}</p>
      <img src={props.image} width={120} height={150} />
    </div>
  );
}
export default Books;
