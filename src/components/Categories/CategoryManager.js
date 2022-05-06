const remoteURL = "http://localhost:8088"

export const getAllCategories = () => {
    return fetch(`${remoteURL}/Categories`)
        .then(res => res.json())
}

export const addCategory = (newCategory) => {
    return fetch(`${remoteURL}/Category`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCategory)
    }).then(response => response.json())
}