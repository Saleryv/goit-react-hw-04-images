import PropTypes from 'prop-types';
import css from "../ImageGalleryItem/ImageGalleryItem.module.css"
import { Modal } from '../Modal/Modal';
import { useState } from 'react';

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModal = () => {
    // this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
    setIsModalOpen(prevState => !prevState);
  };

    return (
      <li className={css.ImageGalleryItem}>
        <img
          onClick={onModal}
          className={css.ImageGalleryItemImage}
          src={webformatURL}
          alt=""
        />
        {isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            onClose={onModal}
          />
        )}
      </li>
    );
  }


ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};