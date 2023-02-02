//Declares variable named displayedImage and returns image class from doc
const displayedImage = document.querySelector('.displayed-img');
//Declares variable named thumbBar and returns image class from doc
const thumbBar = document.querySelector('.thumb-bar');

//Declares variable named btn and returns image class from doc
const btn = document.querySelector('button');
//Declares variable named overlay and returns image class from doc
const overlay = document.querySelector('.overlay');

///Declares variable named images with array of images
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

//Declares the alt text for each image
const alts = { 
    //variable named alts pointing to key: value pairs
    'pic1.jpg': 'Eye Ball',
    'pic2.jpg': 'Wavy Rock',
    'pic3.jpg': 'Purple Flowers',
    'pic4.jpg': 'Anubis Juxtaposed',
    'pic5.jpg': 'Butterfly'
}

//Declares for...of loop (for every image of the images array...{do this})
for (const image of images) {
    //Create new element from document with variable named newImage
    const newImage = document.createElement('img');
    //newImage points to images array
    newImage.setAttribute('src', `images/${image}`);
    //newImage points to alts key:value pairs
    newImage.setAttribute('alt', alts[image]);
    //Attaches newImage to thumbBar
    thumbBar.appendChild(newImage);

    //Adds event listener to newImage variable- when clicked, run function e
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
