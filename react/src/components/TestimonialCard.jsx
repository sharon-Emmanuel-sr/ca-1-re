
import React from 'react';
import TestimonialCard from './components/TestimonialCard';

function App() {
  return (
    <div>
      <h1 >What Our Clients Say</h1>
      <TestimonialCard
        name="Emily Watson"
        review="This service was amazing! Highly recommended."
      />
      <TestimonialCard
        name="James Parker"
        review="Great support and seamless experience throughout."
      />
    </div>
  );
}

export default App;