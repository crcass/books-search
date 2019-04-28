import axios from 'axios';

const url = 'https://www.googleapis.com/books/v1/volumes?q=';

export async function getBooks(term) {
  try {
    const response = await axios.get(`${url}${term}`);
    return response;
  } catch (error) {
    throw error;
  }
}
