document.addEventListener('DOMContentLoaded', () => {
  const dropdownMenu = document.querySelector('.nav-bar ul li.dropdown');
  const dropdownContent = document.querySelector('.nav-bar ul li.dropdown .dropdown-content');
  
  // Initially hide the dropdown content
  dropdownContent.style.display = 'none';

  dropdownMenu.addEventListener('mouseenter', () => {
    dropdownContent.style.display = 'block';
  });

  dropdownMenu.addEventListener('mouseleave', () => {
    // Add a timeout to give time to hover over the dropdown content
    setTimeout(() => {
      if (!dropdownContent.matches(':hover')) {
        dropdownContent.style.display = 'none';
      }
    }, 100);
  });

  dropdownContent.addEventListener('mouseenter', () => {
    dropdownContent.style.display = 'block';
  });

  dropdownContent.addEventListener('mouseleave', () => {
    dropdownContent.style.display = 'none';
  });
});

// repaired tally js
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');

  const options = {
      root: null, // relative to the viewport
      rootMargin: '0px',
      threshold: 0.5 // trigger when 50% of the element is in view
  };

  const callback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const counter = entry.target;
              const updateCounter = () => {
                  const target = +counter.getAttribute('data-target');
                  const count = +counter.innerText;
                  const increment = target / 200;

                  if (count < target) {
                      counter.innerText = Math.ceil(count + increment);
                      setTimeout(updateCounter, 1);
                  } else {
                      counter.innerText = target;
                  }
              };
              updateCounter();
              observer.unobserve(counter); // Stop observing once the counter has started
          }
      });
  };

  const observer = new IntersectionObserver(callback, options);

  counters.forEach(counter => {
      observer.observe(counter);
  });
});