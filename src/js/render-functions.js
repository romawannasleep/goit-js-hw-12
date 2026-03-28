
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const button = document.querySelector(".btn");
const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
    const markup = images.map(image => 
    `
   
    <li>
     <a class="link" href="${image.largeImageURL}">
    <img src="${image.webformatURL}"
    alt="${image.tags}"
    class="pixabay-photo"
   />
   </a>
     <p class="likes">likes: ${image.likes}</p>
    <p class="views">views: ${image.views}</p>
       <p class="comments">comments: ${image.comments}</p>
       <p class="downloads">downloads: ${image.downloads}</p>
    </li>
    
  `
);
    gallery.insertAdjacentHTML('beforeend', markup.join(''));
    lightbox.refresh();
};
export function clearGallery() {
    gallery.innerHTML = "";
}
export function showLoader() {
    loader.classList.add('visible');
}
export function hideLoader() {
    loader.classList.remove('visible');
    
}
export function showLoadMoreButton() {
    button.classList.add('visible');
}
export function hideLoadMoreButton() {
    button.classList.remove('visible');
}

