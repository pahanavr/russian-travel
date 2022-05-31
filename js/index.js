const popup = document.querySelector(".popup");
const imageZoom = document.querySelector(".popup__image");
const popupImage = document.querySelector(".popup_image_type");
const imageZoomCaption = document.querySelector(".popup__image-caption");
const imageViewCloseButton = document.querySelector(".popup__close-button");
const imagesClick = document.querySelectorAll(".photo-grid__item");

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", popupCloseByEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", popupCloseByEsc);
}

function popupCloseByEsc(evt) {
  if (evt.key == "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

const openImageZoomPopup = (item) => {
  imageZoom.src = item.target.src;
  imageZoom.alt = item.target.alt;
  openPopup(popup);
};

imagesClick.forEach((imageClick) => {
  imageClick.addEventListener("click", openImageZoomPopup);
});

imageViewCloseButton.addEventListener("click", () => {
  closePopup(popupImage);
});
