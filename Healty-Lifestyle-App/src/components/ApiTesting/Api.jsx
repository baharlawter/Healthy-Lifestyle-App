import React, { useEffect, useState } from "react";

function Api() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://github.com/AlexFlipnote/CoffeeAPI.git")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        console.log(result);
      })
      .catch((error) => {
        console.error("Error occurred while fetching", error);
      });
  }, []);

  return (
    <div>
      <h2>📄 API Data:</h2>
      {data ? (
        <>
          <h3>{data.title}</h3>
          <h3>{data}</h3>
          {/* <div dangerouslySetInnerHTML={{ __html: data.content }} /> */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Api;
