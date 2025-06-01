  let images = ['./images/DK-KOFIA', './images/DK-JACKET', '.images/DK.jpeg'];
  let index = 1;

  setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById('slideshow').src = images[index];
  }, 2000); // Changes every 2 seconds