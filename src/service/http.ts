import axios from 'axios';

console.log(import.meta.env, 'dsfsd')

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10000,  
    withCredentials: true
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

export const putData = <T, R>(url: string, data?: T) => {
    return new Promise<R>((resolve, reject) => {
        instance.put(url, data).then(response => {
            return resolve(response.data);
        }).catch(error => {
            console.log(error);
            return reject(error)
        })
    })
}

export const postData = <T, R>(url: string, data: T) => {
    return new Promise<R>((resolve, reject) => {
        instance.post(url, data).then(response => {
            return resolve(response.data);
        }).catch(error => {
            console.log(error);
            return reject(error)
        })
    })
}

export const getData = <T, R = void>(url: string, data?: R) => {
    return new Promise<T>((resolve, reject) => {
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