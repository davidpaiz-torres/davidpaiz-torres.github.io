document.addEventListener('DOMContentLoaded', () => {
  // Select the filters
  const boroughFilter = document.getElementById('borough');
  const restaurantFilter = document.getElementById('restaurant');

  // Select the item elements
  const items = document.querySelectorAll('.item');

  // Filter by borough
  function filterByBorough() {
    // Get the selected borough
    const selectedBorough = boroughFilter.value;

    // Show only the selected borough
    items.forEach(item => {
      const itemBorough = item.getAttribute('borough');
      if (selectedBorough === 'Default' || itemBorough === selectedBorough) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Filter by restaurant
  function filterByRestaurant() {
    // Get the selected restaurant
    const selectedRestaurant = restaurantFilter.value;

    // Show all items initially
    items.forEach(item => {
      item.style.display = 'block';
    });

    // Filter by restaurant if a specific restaurant is selected
    if (selectedRestaurant !== 'Default') {
      items.forEach(item => {
        const itemRestaurant = item.getAttribute('restaurant');
        if (itemRestaurant !== selectedRestaurant) {
          item.style.display = 'none';
        }
      });
    }
  }

  // Add event listeners for each filter
  if (boroughFilter && restaurantFilter) {
    boroughFilter.addEventListener('change', filterByBorough);
    restaurantFilter.addEventListener('change', filterByRestaurant);

    // Call the filter functions initially to apply the initial filtering
    filterByBorough();
    filterByRestaurant();
  }

  // Add mouseover and mouseout event listeners to borough items
  const boroughItems = document.querySelectorAll('.item[borough]');

  boroughItems.forEach(item => {
    item.addEventListener('mouseover', handleMouseOver);
    item.addEventListener('mouseout', handleMouseOut);
  });

  function handleMouseOver(e) {
    const hoveredBorough = e.currentTarget;
    const totalViolations = hoveredBorough.getAttribute('data-violations');
    const numberOfViolations = totalViolations.match(/\d+/)[0];
    const existingP = hoveredBorough.querySelector('.violations-info');

    // Only add the violations info if it doesn't already exist
    if (!existingP) {
      const pElement = document.createElement('p');
      pElement.textContent = `Total rodent violations: ${numberOfViolations}`;
      pElement.classList.add('violations-info');
      hoveredBorough.appendChild(pElement);
    }
  }

  function handleMouseOut(e) {
    const hoveredBorough = e.currentTarget;
    const pElement = hoveredBorough.querySelector('.violations-info');
    if (pElement) {
      pElement.remove();
    }
  }
});

// Select the card container
const cardContainer = document.getElementById('dashboard-grid');

// Filter and display the cards
function filterAndDisplayCards() {
    // Your filtering logic here...

    // Append the filtered cards to the card container
    cardContainer.innerHTML = ''; // Clear previous content
    filteredCards.forEach(card => {
        cardContainer.appendChild(card);
    });
}

// Call the filterAndDisplayCards function as needed
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  const options = {
      root: null, // use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5 // trigger when at least 50% of the section is visible
  };

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible');
          }
      });
  }, options);

  sections.forEach(section => {
      observer.observe(section);
  });
});
