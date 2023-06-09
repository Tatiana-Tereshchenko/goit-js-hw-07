import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulEl = document.querySelector('.gallery')

const galleryMarcup = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
<a class="gallery__link"
    href= "${original}">
    <img
    class="gallery__image"
    src= "${preview}"
    alt= "${description}"
    />
</a>
</li>`
}).join('');

ulEl.insertAdjacentHTML('beforeend', galleryMarcup)

console.log(galleryItems);


let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});


