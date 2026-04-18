import { useState } from "react";
import { BookContext } from "./BookContext";

function BookProvider({ children }) {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <BookContext.Provider value={{ selectedBook, setSelectedBook }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookProvider;