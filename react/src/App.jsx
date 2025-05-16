import React from 'react';

const TestimonialCard = ({ name, review }) => {
  return (
    <div>
      <p>{review}</p>
      <h3>{name}</h3>
    </div>
  );
};

export default TestimonialCard;