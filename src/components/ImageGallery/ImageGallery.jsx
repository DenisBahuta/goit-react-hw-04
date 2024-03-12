const ImageGallery = ({ images = null }) => {
  return (
    <ul>
      {images !== null &&
        Array.isArray(images) &&
        images.map((image) => {
          return (
            <li key={image.id}>
              <img width={250} src={image.thumbnail} alt={image.title} />
              <h3>Image: {image.title}</h3>
              <p>{image.description}</p>
              <div>
                <span>Brand: {image.brand}</span>
                <span>Price: ${image.price}</span>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
