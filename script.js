const updateContent = (index) => {
  // Update content based on the current index
  console.log(text_change[index]);

  // Update image visibility based on the media query conditions
  const mediaQuery = window.matchMedia('(max-width: 600px) and (orientation: portrait)');
  const imageElements = [
    document.getElementById('hardships'),
    document.getElementById('person'),
    document.getElementById('bags')
  ];

  if (mediaQuery.matches) {
    // Small screen in portrait orientation
    imageElements.forEach((imageElement, i) => {
      imageElement.style.display = i === index ? 'block' : 'none';
    });
  } else {
    // Larger screens or other orientations
    imageElements.forEach((imageElement) => {
      imageElement.style.display = 'block'; // Show all images
    });
  }
};

const scroller = new Scroller({
  scenes: document.querySelectorAll('.scene'),
  container: document.querySelector('.container'),
});

let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};
let observer = new IntersectionObserver(callback, options);
// Scroller has a tiny event emitter embedded in it!

// the `enter` event is triggered every time a scene crosses the threshold
scroller.on('scene:enter', d => {
  // Add an active class to the div when it crosses in
  d.element.classList.add('active');    
  // change the text in the graphc container when it comes in
  updateContent(d.index); // Call updateContent with the index
});

// the `exit` event is triggered every time a scene exits the threshold
scroller.on('scene:exit', d => {
  // remove active class when it leaves 
  d.element.classList.remove('active');
});


//don't worry about the stuff below here, but make sure to put it in at the end --------------------

scroller.on('init', () => {
  console.log('Everything is ready to go!');
});

scroller.init();
