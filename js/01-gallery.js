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
    data-source="${original}"
    alt= "${description}"
    />
</a>
</li>`
}).join('');

ulEl.insertAdjacentHTML('beforeend', galleryMarcup)

console.log(galleryItems);


ulEl.addEventListener('click', onClick);

function onClick(event) {
event.preventDefault();

if (!event.target.classList.contains('gallery__image')) return;  {
    const imgSrc = event.target.dataset.source;
    const instance = basicLightbox.create(`
        <img src="${imgSrc}" width="800" height="600">
    `, {
        onShow: (instance) => {
        window.addEventListener('keydown', onEscapePress);
        },
        onClose: (instance) => {
        window.removeEventListener('keydown', onEscapePress);
        },
    });
        instance.show();
        function onEscapePress(event) {
    if (event.key === 'Escape') {
    instance.close();
    }
}
    }

}



