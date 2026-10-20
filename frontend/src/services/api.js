
const API_KEY = "770bf87e19824b83930267d20c591f39";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovie = async () => {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY.trim()}`
    );

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
};

export const searchMovie = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY.trim()}&query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
};
