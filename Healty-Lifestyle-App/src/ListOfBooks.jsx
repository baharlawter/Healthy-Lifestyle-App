function ListOfMeals(props) {
  return (
    <div className="props">
      <p>{props.title}</p>
      <p>{props.author}</p>

      <img src={props.image} width={120} height={100} />
    </div>
  );
}
export default ListOfMeals;
