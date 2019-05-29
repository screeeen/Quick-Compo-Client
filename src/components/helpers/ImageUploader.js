import axios from 'axios';


class ImageUploader {
  constructor() {
    this.imageUploader = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    })
  }

  uploadImage(file) {
    return this.imageUploader.post("/api/tournaments/upload-image", file)
    .then(({data}) => data)
  }
}

const imageUploader = new ImageUploader();

export default imageUploader;