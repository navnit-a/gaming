import { useState } from "react";
import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Paris", "Tokyo", "London"];

  const handleOnSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="List"
        onSelectItem={handleOnSelectItem}
      />
    </div>
  );
}
export default App;
