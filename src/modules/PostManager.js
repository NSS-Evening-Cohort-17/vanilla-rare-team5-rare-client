const remoteURL = "http://localhost:8088";

export const getPostById = (postId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(
    `${remoteURL}/mypost/${postId}?_expand=location&_expand=customer`
  ).then((res) => res.json());
};

export const getAllPosts = () => {
  return fetch(`${remoteURL}/mypost`).then((res) => res.json());
};

export const deletePost = (id) => {
  return fetch(`${remoteURL}/mypost/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

export const addPost = (newPost) => {
  return fetch(`${remoteURL}/mypost`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  }).then((response) => response.json());
};

export const updatePost = (editedPost) => {
  return fetch(`${remoteURL}/mypost/${editedPost.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedPost),
  }).then((data) => data.json());
};
