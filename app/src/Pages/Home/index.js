import { useState, useEffect, useRef } from "react"; //跟ReactDom(渲染機制)綁在一起的 可讓react及時吃到資訊 而不像宣告變數
import {API_GET_DATA} from "../../Global/constants"

import Edit from "./Components/Edit";
import List from "./Components/List";
import "./index.css";

// instead of promise
async function fetchData(setData){
  const res = await fetch(API_GET_DATA)
  const { data } = await res.json()
  setData(data)
}

async function putData(data){
  await fetch(API_GET_DATA,{
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({data})
  })
}

const Home = () => {
  const [data, setData] = useState([]); //宣告data為useState 且為陣列 並有一個setData function 做處理
  const summittingStatus = useRef(false);

  // useEfeect 第一個參數放要執行function,第二個參數放綁定的資料(state) 資料有動就跑第一參數function
  // 第二個參數若沒放 則會在每次渲染頁面時執行function
  useEffect(()=>{
    if (!summittingStatus.current){
      return
    }
    putData(data)
    .then(data => summittingStatus.current = false)
  }, [data])

  // 第一次載入執行
  useEffect(()=>{
    fetchData(setData)
  }, [])

  return (
    <div className="app">
      {/* props concept */}
      <Edit add={setData} summittingStatus={summittingStatus} />
      <List listData={data} deleteData={setData} summittingStatus={summittingStatus} />
    </div>
  );
};

export default Home;

// Q:
// setData 為 react 某個function 可以改 useState data的?
