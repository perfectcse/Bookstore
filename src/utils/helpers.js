// Get book cover image
export const getBookCover = (coverId) => {
  if (!coverId) {
    return "https://dummyimage.com/150x220/cccccc/000000&text=No+Cover";
  }
  return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
};

// Get author name
export const getAuthorName = (authors) => {
  return authors?.[0] || "Unknown Author";
};

// Get publish year
export const getPublishYear = (year) => {
  return year || "N/A";
};

// Truncate long text
export const truncateText = (text, maxLength = 40) => {
  if (!text) return "";
  return text.length > maxLength
    ? text.substring(0, maxLength) + "..."
    : text;
};