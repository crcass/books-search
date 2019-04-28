import axios from 'axios';

export async function getBooks(term) {
  const url = term
    ? `https://www.googleapis.com/books/v1/volumes?q=${term}`
    : '/api/books';
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
}

export function postBook(data) {
  return axios.post('/api/books', data);
}

export function deleteBook(id) {
  return axios.delete(`/api/books/${id}`);
}
