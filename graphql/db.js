import fetch from 'node-fetch'

// integrate server with different URL
const API_URL = "https://yts.am/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
}

/**
 * @todo
 * It seems that when value bigger than 9.0 is requested as rating param,
 * the REST API does not response the correct JSON array.
 * It returns movie list of lower ratings between 4~5, but I can not find the reason.
 * I think it might be the problem of yts api perhaps.
 */