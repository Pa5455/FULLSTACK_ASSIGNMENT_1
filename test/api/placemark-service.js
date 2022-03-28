/* eslint-disable dot-notation */
import axios from "axios";

import { maggie, serviceUrl } from "../fixtures.js";

export const placemarkService = {
  placemarkUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.placemarkUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    const res = await axios.get(`${this.placemarkUrl}/api/users`);
    return res.data;
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.placemarkUrl}/api/users`);
    return res.data;
  },

  async createPlacemark(placemark) {
    const res = await axios.post(`${this.placemarkUrl}/api/placemarks`, placemark);
    return res.data;
  },

  async deleteAllPlacemarks() {
    const response = await axios.delete(`${this.placemarkUrl}/api/placemarks`);
    return response.data;
  },

  async deletePlacemark(id) {
    const response = await axios.delete(`${this.placemarkUrl}/api/placemarks/${id}`);
    return response;
  },

  async getAllPlacemarks() {
    const res = await axios.get(`${this.placemarkUrl}/api/placemarks`);
    return res.data;
  },

  async getPlacemark(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/placemarks/${id}`);
    return res.data;
  },

  async createFarm(id, farm) {
    const res = await axios.post(`${this.placemarkUrl}/api/playlists/${id}/farms`, farm);
    return res.data;
  },

  async deleteAllFarms() {
    const res = await axios.delete(`${this.placemarkUrl}/api/farms`);
    return res.data;
  },

  async getFarm(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/farms/${id}`);
    return res.data;
  },

  async deleteFarm(id) {
    const res = await axios.delete(`${this.placemarkUrl}/api/farms/${id}`);
    return res.data;
  },
  
  async authenticate(user) {
    const response = await axios.post(`${this.placemarkUrl}/api/users/authenticate`, user);
    // eslint-disable-next-line prefer-template
    axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common["Authorization"] = "";
  }
};