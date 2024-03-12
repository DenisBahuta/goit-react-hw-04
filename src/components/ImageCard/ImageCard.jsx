const ImageCard = (photo) => {
  <div>
    <img src={photo.urls.small} alt={photo.description} />
  </div>;
};

export default ImageCard;
