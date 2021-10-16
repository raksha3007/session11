import React, { useState } from "react";




const App = () => {
  const defaultList = [
    { name: "ItemOne" },
    { name: "ItemTwo" },
    { name: "ItemThree" }
  ];

  const [list, updateList] = useState(defaultList);

  const handleRemoveItem = (name) => {
  updateList(list.filter(item => item.name !== name));
  };

  return (
    <div>
      {list.map(item => {
        return (
          <>
            
            <span>{item.name}</span>
            <button onClick={handleRemoveItem}>delete</button>
          </>
        );
      })}
    </div>
  );
};
export default App;

