import Home from "./pages/Home";
import BookProvider from "./context/BookProvider";
import "./App.css";

function App() {
  return (
    <BookProvider>
      <Home />
    </BookProvider>
  );
}

export default App;