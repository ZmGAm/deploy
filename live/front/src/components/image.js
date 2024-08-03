// Install the required libraries:
// npm install dom-to-image file-saver

import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

// Assuming you have a <div> with the class "my-content"
const myDiv = document.querySelector('.my-content');

// Convert the <div> to an image
domtoimage.toBlob(myDiv).then((blob) => {
  // Save the blob as a file
  saveAs(blob, 'my-image.png');
});
