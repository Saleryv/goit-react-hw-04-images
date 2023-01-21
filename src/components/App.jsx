import { useState } from 'react';
import { useEffect } from 'react';

import {Searchbar} from "./Searchbar/Searchbar"
import {ImageGallery} from "./ImageGallery/ImageGallery"
import {Button} from "./Button/Button"
import {Loader} from "./Loader/Loader"

import { getPixabayImages } from "services/api"
import { Notify } from 'notiflix';
import css from "../components/styles.css"



export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [totalHits, setTotalHits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

 const handleSubmit = query => {
  setQuery(query);
  setPage(1);
  };

  useEffect(() => {
    if (query.trim() === '') return;
    (async () => {
      setIsLoading(true);
    try {
        const { hits, totalHits } = await getPixabayImages(query, page);
        if (totalHits === 0) {
          Notify.warning('Enter correct data');
        }

        setImages(prevState => (page === 1 ? hits : [...prevState, ...hits]));
        setTotalHits(totalHits);
      } catch (error) {
        Notify.failure('ERROR');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };



    return(
      
      <div className={css.App}>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {totalHits > images.length && <Button onLoadMore={handleLoadMore} />}
      </div>
    
    )
}
