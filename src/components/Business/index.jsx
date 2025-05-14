import styles from './Business.module.css';

const Business = ({
  imageSrc,
  name,
  address,
  city,
  state,
  zipCode,
  category,
  rating,
  reviewCount
}) => {
  return (
    <div className={styles.business}>
      <img src={imageSrc} alt={name} />
      <h2>{name}</h2>
      <div className={styles['business-address']}>
        <p>{address}</p>
        <p>
          {city}, {state} {zipCode}
        </p>
      </div>
      <div className={styles['business-details']}>
        <p>{category}</p>
        <p>{rating} stars</p>
        <p>{reviewCount} reviews</p>
      </div>
    </div>
  );
};

export default Business;
