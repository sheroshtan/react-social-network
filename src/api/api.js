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
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data);
    },
    follow(userId) {
        return axiosInstance.post(`follow/${userId}`);
    },
    unFollow(userId) {
        return axiosInstance.delete(`follow/${userId}`);
    }
};

export const ProfileApi = {
    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return axiosInstance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return axiosInstance.put(`profile/status`, { status: status });
    }
};

export const AuthApi = {
    me() {
        return axiosInstance.get(`auth/me`);
    }
};