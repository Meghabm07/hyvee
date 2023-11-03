import { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([
    "String 1",
    "String 2",
    "String 3",
    "String 4"
  ]);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    let filteredList = [];
    if (e.target.value) {
      filteredList = data.filter((item) =>
        item.toLowerCase().includes(e.target.value)
      );
    }
    setFilteredData(filteredList);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleSearch} />
      <button>Submit</button>
      <ul>
        {filteredData.length ? (
          filteredData.map((item, i) => {
            return <li key={i}>{item}</li>;
          })
        ) : (
          <li>Data Not Found</li>
        )}
      </ul>
    </div>
  );
}
