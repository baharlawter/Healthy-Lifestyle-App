function ListOfMeals(props) {
  return (
    <div className="props">
      <p>{props.title}</p>
      <p>{props.purchase}</p>

      <img src={props.image} width={120} height={150} />
    </div>
  );
}
export default ListOfMeals;
