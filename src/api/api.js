import axios from 'axios';

// const local_url = 'https://ecomms.test/api/v1';
const pro_url = 'https://ecomms-store.herokuapp.com/api/v1';

const API = axios.create({
  baseURL: pro_url,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

////AUTH
export const signup = (formdata) => API.post('/auth/register', formdata);
export const login = (formdata) => API.post('/auth/login', formdata);
export const getMe = () => API.get('/user');
export const addToSubscribers = (formdata) => API.post('/subscribe', formdata);

////PRODUCT
export const getBanners = () => API.get('/banners');
export const getProducts = () => API.get('/products');
export const getProduct = (id) => API.get(`/products/${id}`);
export const getSimilarStore = (id) => API.get(`products/${id}/stores`);
export const getSimilarProduct = (id) => API.get(`/products?similar_to=${id}`);

export const getCategories = () => API.get('/categories?page=1');
export const categoriesProduct = (category) =>
  API.get(`/products?category=${category}`);

////STORES
export const getStates = () => API.get('/states');
export const getLga = (id) => API.get(`/states/${id}/lga`);
export const getStores = (stateId, lgaId) =>
  API.get(`/states/${stateId}/lga/${lgaId}/stores`);

/////Favorites
export const getFavorites = () => API.get('/products?favourites=true');
export const addToFavorites = (id) => API.post(`/favorites/${id}`);
export const removeFromFavorites = (id) => API.delete(`/favorites/${id}`);
