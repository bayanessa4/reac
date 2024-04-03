import React from 'react';

function About() {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_1280.jpg" alt="Bayan essa" style={{ width: '200px', borderRadius: '50%', marginBottom: '20px' }} />
      <h2>About Us</h2>
      <p>
        Hi, I'm Bayan Essa, a passionate web developer with a love for creating beautiful and functional websites.
        I chose to create this site to showcase my skills and share my interests in sports, technology, and design.
      </p>
      <p>
        The content on this site is carefully curated to provide an engaging and informative experience for users.
        I hope that you find it both entertaining and educational.
      </p>
    </div>
  );
}

export default About;