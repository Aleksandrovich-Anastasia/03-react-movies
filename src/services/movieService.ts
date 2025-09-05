import axios from 'axios';
import type { Movie }  from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchMovies(query: string): Promise<Movie[]> {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: { query },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    });
    return response.data.results;
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
}
