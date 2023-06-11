import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>Hello There</Alert>
      )}
      <Button color="secondary" onClick={() => setShowAlert(true)}>
        MY BUTTON
      </Button>
    </div>
  );
}
export default App;
