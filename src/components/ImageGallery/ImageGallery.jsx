import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, handleOpen }) => {
  return (
    <ul>
      <li>
        {images.map(({ id, color, description, likes, urls }) => (
          <ImageCard
            key={id}
            color={color}
            description={description}
            likes={likes}
            urls={urls}
            handleOpen={handleOpen}
          />
        ))}
      </li>
    </ul>
  );
};

export default ImageGallery;
