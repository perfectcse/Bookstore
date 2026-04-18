import { useState, useContext } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { searchBooks } from "../services/api";
import { BookContext } from "../context/BookContext";
import BookDetails from "./BookDetails";
import "./Home.css";
import bgImage from "../assets/photo.jpg";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { selectedBook, setSelectedBook } = useContext(BookContext);

  const handleSearch = async (query) => {
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
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // 👉 Show Book Details Page
  if (selectedBook) {
    return (
      <BookDetails
        book={selectedBook}
        onBack={() => setSelectedBook(null)}
      />
    );
  }

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div
        className="home-hero"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="home-hero-overlay">
          <h1 className="home-title">📚 Book Explorer</h1>
          <p className="home-subtitle">
            Discover books, authors, and knowledge instantly
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="search-wrapper">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Loading */}
      {loading && (
        <div className="loader-wrapper">
          <Loader />
        </div>
      )}

      {/* Error */}
      {error && <ErrorMessage message={error} />}

      {/* Empty State */}
      {!loading && !error && books.length === 0 && (
        <p className="empty-state">
          Start typing to explore millions of books 📖
        </p>
      )}

      {/* Book List */}
      <div className="book-grid">
        {books.map((book, index) => (
          <BookCard
            key={book.key || index}
            book={book}
            onSelect={setSelectedBook}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;