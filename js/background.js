const images = ["cat.jpg", "moon.jpg", "snow_mountain.jpg", "space.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = chosenImage;

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);
document.body.style.backgroundImage = `url(img/${chosenImage})`;
