# Image Gallery Pseudo Code

## Procedure

### Concept
- Create an image gallery that displays 1 large image in the center of the page, with 5 smaller thumbnail images spanning the width below the bottom edge of the main image. When thumbnail images are clicked, the clicked image should appear as the main image, and the main image should move into the row of thumbnail images. a button labled "Darken" should sit inside the top left corner of the main image area, and when the button is clicked the main and thumnail images should become darker.  

### Process
- Create main image
- Thumbnail images in row beneath main image
- User clicks a thumbnail image, the clicked image will appear as the main image
- Main image moves to thumbnail when clicked thumbnail appears in main image area
- Clicking "Darken" button darkens main and thumbnail images

### Function
1. Images
    - images 1-6 (jpg)
    - one image should occupy main image container always (main-container)
    - other 5 images should remain in a row spanning the width of the main image container, below the bottom edge (thumbnail)
    - thumbnails should be clickable (eventListener)
        - click should correspond to image selected
        - when thumbnail is clicked and appears in main, image that was in main should move to thumbanils.
2. Button (Darken)
    - positioned at top left corner of main image area
    - when clikced, both main and thumbnail images should darked
        -opacity overlay




