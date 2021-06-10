// 單一事情
// 後面各掛一個delete button 刪除

const Item = ({ id, note, date, time, deleteData, summittingStatus }) => {
  function deleteItem() {
    summittingStatus.current = true
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">
        刪除
      </button>
    </div>
  );
};

export default Item;
