import {
  getBookCover,
  getAuthorName,
  getPublishYear,
  truncateText,
} from "../utils/helpers";
import "./BookCard.css";

function BookCard({ book, onSelect }) {
  return (
    <div
      className="book-card"
      onClick={() => onSelect && onSelect(book)}
    >
      {/* Image */}
      <img
        src={getBookCover(book.cover_i)}
        alt={book.title || "Book Cover"}
        className="book-image"
        onError={(e) => {
          e.target.src =
            "https://dummyimage.com/150x220/cccccc/000000&text=No+Cover";
        }}
      />

      {/* Content */}
      <div className="book-content">
        <h3 className="book-title">
          {truncateText(book.title || "Untitled", 40)}
        </h3>

        <p className="book-info">
          {getAuthorName(book.author_name)}
        </p>

        <p className="book-info">
          {getPublishYear(book.first_publish_year)}
        </p>
      </div>
    </div>
  );
}

export default BookCard;