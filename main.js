const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFileNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const imageAltText = {
    'pic1.jpg': 'Eye Ball',
    'pic2.jpg': 'Wavy Rock',
    'pic3.jpg': 'Purple Flowers',
    'pic4.jpg': 'Anubis Juxtaposed',
    'pic5.jpg': 'Butterfly'
}

/* Looping through images */
for (const imageFileName of imageFileNames) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', xxx);
    newImage.setAttribute('alt', xxx);
    thumbBar.appendChild(newImage);
}




/* Wiring up the Darken/Lighten button */