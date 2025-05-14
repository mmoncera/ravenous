import { useState } from 'react';
import styles from './BusinessList.module.css';

import Business from '../Business/index.jsx';

const initialBusinesses = [
  {
    imageSrc: 'https://via.placeholder.com/150',
    name: 'Sample Business 1',
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
    category: 'Restaurant',
    rating: 4.5,
    reviewCount: 90
  },
  {
    imageSrc: 'https://via.placeholder.com/150/0000FF/808080',
    name: 'Coffee Corner',
    address: '456 Elm St',
    city: 'Brewtown',
    state: 'NY',
    zipCode: '10001',
    category: 'Cafe',
    rating: 4.2,
    reviewCount: 120
  },
  {
    imageSrc: 'https://via.placeholder.com/150/FF0000/FFFFFF',
    name: 'Book Nook',
    address: '789 Oak Ave',
    city: 'Readville',
    state: 'TX',
    zipCode: '75001',
    category: 'Bookstore',
    rating: 4.8,
    reviewCount: 75
  },
  {
    imageSrc: 'https://via.placeholder.com/150/00FF00/000000',
    name: 'Fitness Hub',
    address: '321 Maple Rd',
    city: 'Fit City',
    state: 'FL',
    zipCode: '33101',
    category: 'Gym',
    rating: 4.6,
    reviewCount: 60
  }
];

const BusinessList = () => {
  const [businesses, setBusinesses] = useState(initialBusinesses);
  return (
    <div className={styles['business-list']}>
      {businesses.map((business, idx) => (
        <div key={business.id || idx} className={styles['business-item']}>
          <Business
            imageSrc={business.imageSrc}
            name={business.name}
            address={business.address}
            city={business.city}
            state={business.state}
            zipCode={business.zipCode}
            category={business.category}
            rating={business.rating}
            reviewCount={business.reviewCount}
          />
        </div>
      ))}
    </div>
  );
};

export default BusinessList;
