import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
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

  const instance = basicLightbox.create(
    `
  <img src="${event.target.dataset.source}" width="800" height="600">
  `,
    {
      onShow: () => {
        document.addEventListener("keydown", onEscPress);
      },
      onClose: () => {
        document.removeEventListener("keydown", onEscPress);
      },
    }
  );
  function onEscPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
  instance.show();
}

console.log(galleryItems);
