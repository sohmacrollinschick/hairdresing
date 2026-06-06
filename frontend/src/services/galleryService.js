import api from "./api";

export const galleryService = {
  list: () => api.get("/gallery"),
  uploadImage: (payload) => api.post("/gallery/image", payload),
  uploadVideo: (payload) => api.post("/gallery/video", payload),
  remove: (id) => api.delete(`/gallery/${id}`)
};
