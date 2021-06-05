import { useState } from "react"; //跟ReactDom(渲染機制)綁在一起的 可讓react及時吃到資訊 而不像宣告變數

import Edit from "./Components/Edit";
import Item from "./Components/Item";
import List from "./Components/List";
import "./index.css";

const Home = () => {
  const [data, setData] = useState([]); //宣告data為useState 且為陣列 並有一個setData function 做處理

  return (
    <div className="app">
      {/* props concept */}
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;

// Q:
// setData 為 react 某個function 可以改 useState data的?
