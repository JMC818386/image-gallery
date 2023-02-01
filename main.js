const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFileNames = ['img/pic1.jpg', 'img/pic2.jpg', 'img/pic3.jpg', 'img/pic4.jpg', 'img/pic5.jpg'];

/* Declaring the alternative text for each image file */
const imageAltText = {
    'img/pic1.jpg': 'Eye Ball',
    'img/pic2.jpg': 'Wavy Rock',
    'img/pic3.jpg': 'Purple Flowers',
    'img/pic4.jpg': 'Anubis Juxtaposed',
    'img/pic5.jpg': 'Butterfly'
}

/* Looping through images */
for (const imageFileName of imageFileNames) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', xxx);
    newImage.setAttribute('alt', xxx);
    thumbBar.appendChild(newImage);
}




/* Wiring up the Darken/Lighten button */