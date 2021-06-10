// Edit()從上層接東西進來修改
// 在button 加 onclick 事件 處理接進來的set function

import { useState } from "react"; //跟ReactDom(渲染機制)綁在一起的 可讓react及時吃到資訊 而不像宣告變數
import { v4 } from "uuid";

const Edit = ({ add, summittingStatus }) => {
  // 宣告各欄位(note, date, time)為useState
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  // map不是物件的方法 是陣列的
  // 要拿到上一個值再把現在的data塞進去
  function addItem() {
    summittingStatus.current = true
    add(function (prevData) {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prevData,
      ];
    });
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事：</p>

      {/* value為一個useState值 在透過一個function onchange useState值 */}
      <input type="text" value={note} onChange={noteChange} />
      <p>日期：</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間：</p>
      <input type="time" value={time} onChange={timeChange} />

      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;

// Q:
// add 為 index.js 的 setData function?
// 是的話 他可以裡面再塞一個function沒問題 但prev直接代表上次Data值?? yt影片1:10:10
// setData function 只有return的東西會改 data??(line 28)
