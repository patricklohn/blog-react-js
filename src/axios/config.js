import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Contente-Type": "application/json",
    }
});

export default blogFetch;