import {
  getBookCover,
  getAuthorName,
  getPublishYear,
} from "../utils/helpers";
import "./BookDetails.css";

function BookDetails({ book, onBack }) {
  // Safety check
  if (!book) {
    return <p className="details-container">No book selected</p>;
  }

  return (
    <div className="details-container">
      {/* Back Button */}
      <button onClick={onBack} className="back-button">
        ⬅ Back
      </button>

      {/* Main Card */}
      <div className="details-card">
        {/* Book Cover */}
        <div className="details-image-wrapper">
          <img
            src={getBookCover(book.cover_i)}
            alt={book.title}
            className="details-image"
          />
        </div>

        {/* Book Info */}
        <div className="details-info">
          <h2 className="details-title">{book.title}</h2>

          <p className="details-text">
            <strong>Author:</strong> {getAuthorName(book.author_name)}
          </p>

          <p className="details-text">
            <strong>First Published:</strong>{" "}
            {getPublishYear(book.first_publish_year)}
          </p>

          <p className="details-text">
            <strong>Publisher:</strong>{" "}
            {book.publisher?.[0] || "N/A"}
          </p>

          <p className="details-text">
            <strong>Language:</strong>{" "}
            {book.language?.[0] || "N/A"}
          </p>

          <p className="details-text">
            <strong>Edition Count:</strong>{" "}
            {book.edition_count || "N/A"}
          </p>

          {/* Extra (nice touch) */}
          {book.subject && (
            <p className="details-text">
              <strong>Subjects:</strong>{" "}
              {book.subject.slice(0, 3).join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookDetails;