export const searchBooks = async (query) => {
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("API failed");
  }

  return response.json();
};