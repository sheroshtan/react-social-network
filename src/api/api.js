import * as axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "92afcfb6-c794-4929-b1c7-95dccc9b3375"
    }
});

export const UsersApi = {
    getUsers(currentPage, pageSize) {
        return axiosInstance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data);
    }
};