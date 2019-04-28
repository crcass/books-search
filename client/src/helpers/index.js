import book from './book_1.png';

const formatNames = arr => arr.join(', ').replace(/, ([^,]*)$/, ' & $1');

export function formatResults(arr) {
  return arr.map((item, i) => ({
    id: i,
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors
      ? formatNames(item.volumeInfo.authors)
      : '',
    description: item.volumeInfo.description,
    image: item.volumeInfo.imageLinks
      ? item.volumeInfo.imageLinks.thumbnail
      : book,
    link: item.volumeInfo.canonicalVolumeLink
  }));
}
