const ImageCard = ({ description, urls, handleOpen }) => {
  return (
    <div onClick={() => handleOpen(urls, description)}>
      <img src={urls.small} alt={description} />
    </div>
  );
};

export default ImageCard;
