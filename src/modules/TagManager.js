const remoteURL = "http://localhost:8088"

export const addTag = (tag) => {
    return fetch(`${remoteURL}/tags`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(tag)
    }).then(response => response.json()
    )
  }

export const getTagById = (id) => {
    return fetch(`${remoteURL}/tags/${id}`)
    .then(res => res.json())
  }
  
export const getAllTags = () => {
    return fetch(`${remoteURL}/tags`)
    .then(res => res.json())
  }

export const updateTag = tag => {
    return fetch(`${remoteURL}/${tag.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })
        .then(getAllTags)
}
