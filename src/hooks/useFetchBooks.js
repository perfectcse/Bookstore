import { useState } from "react";
import { searchBooks } from "../services/api";

function useFetchBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBooks = async (query) => {
    try {
      setLoading(true);
      setError("");
      setBooks([]);

      const data = await searchBooks(query);

      if (!data.docs || data.docs.length === 0) {
        setError("No books found");
      } else {
        setBooks(data.docs);
      }
    } catch (err) {
      console.error(err); // debug
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { books, loading, error, fetchBooks };
}

export default useFetchBooks;