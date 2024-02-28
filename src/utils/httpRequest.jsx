import axios from "axios";

const httpRequest = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    try {
        const response = await httpRequest.get(path, options);
        return response.data;
    } catch (error) {
        throw new error();
    }
};

export default httpRequest;
