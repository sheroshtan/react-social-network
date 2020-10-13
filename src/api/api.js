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
    },
    savePhoto(file) {
        const formData = new FormData();
        formData.append('image', file);
        return axiosInstance.put(`profile/photo`, formData, { headers: { 'Content-Type': 'multipart/form-data' }});
    },
    saveProfile(formData) {
        return axiosInstance.put(`profile`, formData);
    }
};

export const AuthApi = {
    me() {
        return axiosInstance.get(`auth/me`);
    },
    login(email, password, rememberMe = false, captchaUrl = null) {
        return axiosInstance.post(`auth/login`, {email, password, rememberMe, captchaUrl});
    },
    logout() {
        return axiosInstance.delete(`auth/login`);
    }
};

export const SecurityApi = {
    getCaptchaUrl() {
        return axiosInstance.get('security/get-captcha-url');
    }
};