const getWikiResult = async (searchTerm: string) => {
  const searchParams = new URLSearchParams({
    action: "query", // Specifies we're making a query to the API
    generator: "search", // Uses Wikipedia's search feature
    gsrsearch: searchTerm, // The actual search term from user
    gsrlimit: "20", // Limits results to 20 items
    prop: "extracts|pageimages", // Gets both text extracts and images
    exchars: "200", // Limits extract to 100 characters
    exintro: "true", // Only gets the intro section
    explaintext: "true", // Returns plain text (no HTML)
    exlimit: "max", // Gets maximum allowed extracts
    format: "json", // Returns results in JSON format
    origin: "*", // Enables CORS for browser requests
  });

  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?${searchParams.toString()}`
  );

  return response.json();
};
export default getWikiResult;
