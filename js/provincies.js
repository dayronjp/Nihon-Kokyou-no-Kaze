const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });
  
  const images = document.querySelectorAll('.province-img');
  const paragraphs = document.querySelectorAll('p');
  
  images.forEach(image => {
    observer.observe(image);
  });
  
  paragraphs.forEach(paragraph => {
    observer.observe(paragraph);
  });
