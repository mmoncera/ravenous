const Business = () => {
  const business = {
    imageSrc: 'https://via.placeholder.com/150',
    name: 'Sample Business',
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
    category: 'Restaurant',
    rating: 4.5,
    reviewCount: 90
  };

  return (
    <div className="business">
      <img src={business.imageSrc} alt={business.name} />
      <h2>{business.name}</h2>
      <div className="business-address">
        <p>{business.address}</p>
        <p>
          {business.city}, {business.state} {business.zipCode}
        </p>
      </div>
      <div className="business-details">
        <p>{business.category}</p>
        <p>{business.rating} stars</p>
        <p>{business.reviewCount} reviews</p>
      </div>
    </div>
  );
};

export default Business;
