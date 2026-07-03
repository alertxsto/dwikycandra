import React, { useState, useEffect } from 'react';
import './profilePhoto.css';
import profileImage from '../images/profile.jpg';

export default function ProfilePhoto() {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = (e) => {
    console.error('Image failed to load from:', e.target.src);
    setImageError(true);
    // Fallback to a solid color background
    e.target.style.backgroundColor = '#9b59ff';
    e.target.style.backgroundImage = 'linear-gradient(135deg, #9b59ff, #6432ff)';
  };

  const handleImageLoad = () => {
    console.log('Image loaded successfully');
    setImageLoaded(true);
  };

  useEffect(() => {
    console.log('ProfilePhoto component mounted. Image loaded:', imageLoaded, 'Error:', imageError);
  }, []);

  return (
    <div className="profile-photo-container">
      <div className="profile-photo-wrapper">
        <div className="profile-photo-gradient-border"></div>
        <img 
          src={profileImage}
          alt="Dwiky Candra Profile"
          className="profile-photo"
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
        <div className="profile-photo-shine"></div>
      </div>
    </div>
  );
}
