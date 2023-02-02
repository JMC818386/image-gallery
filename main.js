//--------------------Variable declarations-----------------------//

//Declares variable named displayedImage targeting image class from html doc
const displayedImage = document.querySelector('.displayed-img');
//Declares variable named thumbBar targeting image class from html doc
const thumbBar = document.querySelector('.thumb-bar');

//Declares variable named btn targeting image class from html doc
const btn = document.querySelector('button');
//Declares variable named overlay targeting image class from html doc
const overlay = document.querySelector('.overlay');

///Declares variable named images with array of images
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

//Declares the alt text for each image
const alts = { 
    //variable named alts pointing to key : value pairs
    'pic1.jpg': 'Eye Ball',
    'pic2.jpg': 'Wavy Rock',
    'pic3.jpg': 'Purple Flowers',
    'pic4.jpg': 'Anubis Juxtaposed',
    'pic5.jpg': 'Butterfly'
}

//--------------------For loop-----------------------//

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

//--------------------Event Listener-----------------------//   
 
    //Adds event listener to newImage variable- when clicked, run mouse event
    newImage.addEventListener('click', e => {
        //Mouse event targets src and alt from diplayedImage
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

//Adds event listener to btn
btn.addEventListener('click', ()=> {
    const btnClass = btn.getAttribute('class');
    //If...else if button is dark...
    if (btnClass === 'dark') {
        //Set button make button light
        btn.setAttribute('class' , 'light');
        //Change rendered button text to "Lighten"
        btn.textContent = 'Lighten';
        //Apply overlay
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }   else {
        //Set button make button dark
        btn.setAttribute('class', 'dark');
        //Change rendered button text to "Lighten"
        btn.textContent = 'Darken';
        //Apply overlay
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});