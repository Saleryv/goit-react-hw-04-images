import { useState } from 'react';
import css from '../Searchbar/Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      return;
    }
    onSubmit(query);
    setQuery('');
  };

return (
  <header className={css.Searchbar}>
    <form className={css.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={css.SearchFormButton}>
        <span className={css.SearchFormLabel}>Search...</span>
      </button>
      <input
        onInput={handleChange}
        className={css.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={query}
      />
    </form>
  </header>
);
}