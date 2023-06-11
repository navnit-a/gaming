import ListGroup from "./components/ListGroup";

function App() {
  let items = ["A", "B", "C"];

  return (
    <div>
      <ListGroup
        items={items}
        heading="Miami"
        onSelectItem={() => console.log("hello")}
      />
    </div>
  );
}
export default App;
