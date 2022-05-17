export const getUsers = () => {
    return fetch("http://127.0.0.1:8088/user")
        .then(res => res.json())
}

export const getUserNames = () => {
    return fetch("http://127.0.0.1:8088/userlist")
        .then(res => res.json())
}