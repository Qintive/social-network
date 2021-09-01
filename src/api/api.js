import * as axios from 'axios'

const instance = axios.create({

    withCredentials: true,
    headers: { 'API-KEY': '4bc9fccd-c230-4647-b96b-814e1ebd02fb' },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (instance.get(`users?page=${currentPage}&count=${pageSize}`)

            .then(response => {
                return response.data

            })
        )

    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile (userId) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus (userId) {
        return instance.get(`profile/status/` + userId)
    },
    putStatus (status) {
        return instance.put(`profile/status/`, {status: status})
    },
    putPhoto (image) {
        return instance.put(`profile/photo/`, {image: image})
    },
  
}

export const authAPI = {
    auth () {
        return instance.get(`auth/me/`)
    },
    login (email, password, rememberMe=false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    }
}