import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { getPhotos, getPhotosByQuery } from "./services/images-api";

function App() {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        // 1. Встановлюємо індикатор в true перед запитом
        setLoading(true);
        const data = await getPhotos();

        setImages(data.data);
      } catch (error) {
        // Встановлюємо стан error в true
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []); //query, page- параметры в массиве зависимостей

  useEffect(() => {
    if (searchQuery === null) return;

    async function fetchImagesByQuery() {
      try {
        setLoading(true);
        const data = await getPhotosByQuery(searchQuery);

        setImages(data.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImagesByQuery();
  }, [searchQuery]);

  const onSetSearchQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
