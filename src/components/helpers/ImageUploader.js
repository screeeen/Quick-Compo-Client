import axios from 'axios';


class ImageUploader {
  constructor() {
    this.imageUploader = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true,
    })
  }

  // createMeme(meme) {
  //   return this.meme.post('/', meme)
  //   .then(({data}) => data)
  // }

  // getAllMemes() {
  //   return this.meme.get('/')
  //   .then(({data}) => data)
  // }

  uploadImage(file) {
    return this.imageUploader.post("/api/tournaments/upload-image", file)
    .then(({data}) => data)
  }
}

const imageUploader = new ImageUploader();

export default imageUploader;