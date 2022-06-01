import axios from "axios";

import {user} from "../stores";
import {coffeeShop} from "../stores";


export class CoffeeHubService {
  baseUrl = "http://iewalbjw24b3:4000";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    const reviewCredentials = localStorage.review;
    if (reviewCredentials) {
      const savedUser = JSON.parse(reviewCredentials);
      user.set({
        email: savedUser.email,
        token: savedUser.token,
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token,
        });
        localStorage.review = JSON.stringify({email: email, token: response.data.token});
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      token: "",
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("review");
  }

  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  }

  async addCoffeeShop(rating, coffeeShopName, lat, lng, location, image) {
   
    try {
      const newCoffeeShop = {
        coffeeShopName: coffeeShopName,
        lat: Number(lat),
        lng: Number(lng),
        rating: Number(rating),
        location: location,
        image: image,

      }
      const response = await axios.post(this.baseUrl + "/api/coffeeShop", newCoffeeShop);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }

  async getCoffeeShops() {
    try {
      const response = await axios.get(this.baseUrl + "/api/coffeeShop");
      console.log(response);
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getCoffeeShopsById(id) {
    try {
      const response = await axios.get(this.baseUrl + "/api/coffeeShop/"+id+"");
      console.log(response);
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getReviews() {
    try {
      const response = await axios.get(this.baseUrl + "/api/coffeeShop");
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getCoffeeShopByUserId(id) {
    try {
      const response = await axios.get(this.baseUrl + "/api/coffeeShop/user/" + id +"");
      console.log('getCoffeeShopByUserId Response-> '+ response)
      console.log('getCoffeeShopByUserId Response.Data-> '+ response.data)
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getLocations() {
    try {
      const response = await axios.get(this.baseUrl + "/api/locations");
      return response.data;
    } catch (error) {
      return [];
    }
  }
  
  async addImageToCoffeeShop(id, img) {
    try {
      const imgUrl = {
        url: img,
       
      }
      const response = await axios.post(this.baseUrl + "/api/coffeeShop/"+id +"/addImage", imgUrl);
      coffeeShop.set({
        img: response.data.img,
      });
      console.log('response ->' + response)
      console.log('response.data ->' + response.data)
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getAllUsers(){
    try{

      const response = await axios.get(this.baseUrl + "/api/users")
      console.log('response ->' + response)
      console.log('response.data ->' + response.data)
      return response.data;
    } catch (error) {
      return [];
    }
  }
}

