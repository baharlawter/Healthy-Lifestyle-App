import { useEffect } from "react";

function Api() {
  let data;
  //   useEffect(() => {
  async function getData() {
    const response = await fetch("http://makeup-api.herokuapp.com/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.data = await response.json();
    console.log(data);
  }
  // fetch("https://api.fda.gov/drug/label.json")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.error("Error fetching data", err));
  //   }, []);

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <h1>{data}</h1>
    </div>
  );
}

export default Api;
