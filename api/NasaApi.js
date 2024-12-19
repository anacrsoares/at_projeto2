// api/nasaAPI.js
const BASE_URL = "https://images-api.nasa.gov/search";

export const fetchImages = async (astro, page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}?q=${astro}&page=${page}`);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const data = await response.json();

    return data.collection.items.map((item) => ({
      id: item.data[0].nasa_id,
      title: item.data[0].title,
      imageUrl: item.links?.[0]?.href,
      date_created: new Date(item.data[0].date_created)
        .toISOString()
        .split("T")[0],
      description: item.data[0].description || "No description available.",
      secondary_creator:
        item.data[0].secondary_creator || "No secondary creator available.",
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};
