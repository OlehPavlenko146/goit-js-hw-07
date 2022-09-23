import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>`;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

const galleryContainer = document.querySelector(".gallery");

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();

  const isItemGallery = event.target.classList.contains("gallery__image");

  if (!isItemGallery) {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery__item ", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}

console.log(galleryItems);
