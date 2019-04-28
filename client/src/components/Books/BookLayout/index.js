import React, { Fragment } from 'react';

const BookLayout = ({
  authors,
  description,
  id,
  image,
  link,
  title,
  removeBook,
  saveBook,
  save
}) => (
  <Fragment>
    <div>
      <h2>{title}</h2>
      <h3>{authors}</h3>
    </div>
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Visit
      </a>
      <button data-index={id} onClick={removeBook || saveBook}>
        {save ? 'Save' : 'Delete'}
      </button>
    </div>
    <div>
      <img src={image} alt={title} />
      <p>{description}</p>
    </div>
  </Fragment>
);

export default BookLayout;
