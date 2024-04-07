const text_change = [
  'THE HARDSHIPS OF CONGOLESE MIGRANTS',
  'FINDING COMMUNITY IN HARLEM',
  'A TASTE OF HOME'
];

const updateContent = (index) => {
  // Update content based on the current index
  console.log(text_change[index]);

  // Update image based on the current index
  const imageElements = [
    document.getElementById('hardships'),
    document.getElementById('person'),
    document.getElementById('bags')
  ];
}
  // imageElements.forEach((imageElement, i) => {
  //   if (i === index) {
  //     imageElement.style.display = 'block'; // Show the image
  //   } else {
  //     imageElement.style.display = 'none'; // Hide other images
  //   }
  // })};

const images = document.querySelectorAll('.image-container img');

const scroller = new Scroller({
  scenes: document.querySelectorAll('.scene'),
  container: document.querySelector('.container'),
  rootMargin: '-850px 0px', 
  threshold: 0 
});

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
