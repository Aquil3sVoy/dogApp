import axios from 'src/view/shared/axios/axios';

export default class DogService {
  static async random() {
    const response = await axios.get(`breeds/image/random`);
    console.log('Random', response);
    return response.data.message;
  }

  static async list() {
    const response = await axios.get(`/breeds/list/all`);
    return response.data.message;
  }

  static async selecBreed(breedName) {
    const response = await axios.get(
      `/breed/${breedName}/images`,
    );
    return response.data.message;
  }

  static async selectSubBreed(breedName, subBreedName) {
    const response = await axios.get(
      `/breed/${breedName}/${subBreedName}/images`,
    );
    return response.data.message;
  }
}
