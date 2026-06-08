// src/components/common/CloudinaryImage.jsx
import React from 'react';

// Get cloud name from environment variable
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'duyytaxgd';
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

const CloudinaryImage = ({ 
  src, 
  alt = '', 
  width, 
  height, 
  className = '',
  quality = 'auto',
  format = 'auto'
}) => {
  // Build transformation string
  const transformations = [];
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (quality) transformations.push(`q_${quality}`);
  if (format) transformations.push(`f_${format}`);
  
  const transformString = transformations.length > 0 
    ? transformations.join(',') + '/' 
    : '';
  
  // Use src as-is (with or without extension)
  const imageUrl = `${CLOUDINARY_BASE_URL}/${transformString}${src}`;
  
  // Debug: log the URL
  console.log('Cloudinary Image URL:', imageUrl);
  
  return (
    <img 
      src={imageUrl} 
      alt={alt} 
      className={className}
      loading="lazy"
      onError={(e) => {
        console.error('Failed to load image:', imageUrl);
        // Keep original src as fallback or use placeholder
        if (!e.target.src.includes('/img/')) {
          e.target.src = '/img/hero-img.svg'; // Fallback to local
        }
      }}
    />
  );
};

export default CloudinaryImage;
