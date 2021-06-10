import Item from "./Item";

const List = ({ listData, deleteData, summittingStatus }) => {
  return (
    <div className="list">
      {
        // need to use key when using map & key should be unique
        // not recommend to use index with key
        // => if data changes, index can ensure its accuracy
        // => ex. [a,b,c] -> [0,1,2] , if delete b -> change to [a,c] -> [0,1]
        // index 1 may no more represent 'b' -> !!! now is c  -> React needs efficacy to re-recognize the elements
        listData.map((item) => {
          const {
            note = "default",
            date = "default",
            time = "default",
            id
          } = item;

          //等號左邊為 Item 裡的原件 右邊為上面定義
          return (
            <Item
              id={id}
              key={id}
              note={note}
              date={date}
              time={time}
              deleteData={deleteData}
              summittingStatus={summittingStatus}
            />
          );
        })
      }
    </div>
  );
};

export default List;
