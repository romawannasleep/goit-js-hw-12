import axios from "axios";
const URL = "https://pixabay.com/api/";
export async function getImagesByQuery(query, page = 1) {
    const res = await axios.get(URL, {
    params: {
        key: "55023028-a47613c23fe5e51542ebeaaa1",
        q: `${query}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: 15,
    }
});
return res.data;
};