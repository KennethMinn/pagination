import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pagination from "./Pagination";

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  console.log(currentPage + "app");

  const cut = (text) => {
    if (text.length > 70) return text.substr(0, 70) + "...";
    return text;
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const { products } = await res.json();
      setData(products);
      console.log(products);
    };
    fetchData();
  }, []);

  const lastPostIndex = currentPage * itemsPerPage;
  const firstPostIndex = lastPostIndex - itemsPerPage;
  const currentItems = data.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="  grid grid-cols-2 gap-y-10 justify-items-center">
        {currentItems.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <h1>{cut(item.description)}</h1>
          </div>
        ))}
      </div>
      <div className=" ms-20 mt-5">
        <Pagination
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          data={data}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default App;
