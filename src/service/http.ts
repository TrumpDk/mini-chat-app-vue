import axios from 'axios';

console.log(import.meta.env, 'dsfsd')

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10000,  
    withCredentials: false
});

instance.interceptors.request.use((config) => {
    return config
}, (e) => {
    console.log(e);
})

instance.interceptors.response.use(response => {
    //return Promise.resolve
    return response
}, (e) => {
    return Promise.reject(e)
})

export const putData = <T>(url: string, data: T) => {
    return new Promise((resolve, reject) => {
        instance.put(url, data).then(response => {
            return resolve(response.data);
        }).catch(error => {
            console.log(error);
            return reject(error)
        })
    })
}

export const postData = <T>(url: string, data: T) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data).then(response => {
            return resolve(response.data);
        }).catch(error => {
            console.log(error);
            return reject(error)
        })
    })
}

export const getData = <T>(url: string, data?: T) => {
    return new Promise((resolve, reject) => {
        console.log(url, 'ssss')
        instance.get(url, {params: data}).then(response => {
            return resolve(response.data);
        }).catch(error => {
            console.log(error);
            return reject(error)
        })
    })
}

export const deleteData = <T>(url: string, data: T) => {
    return new Promise((resolve, reject) => {
        instance.delete(url, {params: data}).then(response => {
            return resolve(response.data);
        }).catch(error => {
            console.log(error);
            return reject(error)
        })
    })
}