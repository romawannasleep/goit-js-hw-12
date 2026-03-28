import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery, hideLoadMoreButton, showLoadMoreButton } from "./js/render-functions";
import { showLoader } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";
import { createGallery } from "./js/render-functions";
const form = document.querySelector(".form");
const button = document.querySelector(".btn");
let currentQuery = "";
let currentPage = 1;
let totalHits = 0;
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (e.target.elements['search-text'].value === "") {
        iziToast.error({
            title: 'Error',
        });
        return;
    }
    currentQuery = e.target.elements['search-text'].value.trim();
    currentPage = 1;
    clearGallery();
    hideLoadMoreButton();
    showLoader();
    try{
        const data = await getImagesByQuery(e.target.elements['search-text'].value);
        totalHits = data.totalHits;
        if (data.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        } else {
        createGallery(data.hits);
        if (currentPage * 15 >= totalHits) {
            hideLoadMoreButton();
            iziToast.info({
                title: 'Info',
                message: "We're sorry, but you've reached the end of search results.",
            });
        } else{
            showLoadMoreButton();
        }
        }
    } catch(error) {
        iziToast.error({
            title:'Error',
            message: `${error}`
        })
    } finally {
        hideLoader();
    }
    e.target.reset();
    
    
});
button.addEventListener('click', async () => {
    currentPage += 1;
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(currentQuery, currentPage);
        createGallery(data.hits);
        const card = document.querySelector(".gallery li");
        const cardHeight = card.getBoundingClientRect().height;
        window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth",
        });
        if (currentPage * 15 >= totalHits) {
            hideLoadMoreButton();
            iziToast.info({
                title: 'Info',
                message: "We're sorry, but you've reached the end of search results.",
            });
        }
    } catch (error) {
        iziToast.error({ title: 'Error', message: `${error}` });
    } finally {
        hideLoader();
    }
});