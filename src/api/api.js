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
export const getProductsByStore = (id) => API.get(`/products?store=${id}`);
export const getProduct = (id) => API.get(`/products/${id}`);
export const getProductsByBest = (id) =>
  API.get(`/products?best_selling=true&store=${id}`);
export const getSimilarStore = (id) => API.get(`products/${id}/stores`);
export const getSimilarProduct = (id) => API.get(`/products?similar_to=${id}`);

export const getCategories = () => API.get('/categories?page=1');
export const categoriesProduct = (category, id) =>
  API.get(`/products?category=${category}&store=${id}`);

////STORES
export const getStates = () => API.get('/states');
export const getLga = (id) => API.get(`/states/${id}/lga`);
export const getStores = (stateId, lgaId) =>
  API.get(`/states/${stateId}/lga/${lgaId}/stores`);

/////Favorites
export const getFavorites = () => API.get('/products?favourites=true');
export const addToFavorites = (id) => API.post(`/favorites/${id}`);
export const removeFromFavorites = (id) => API.delete(`/favorites/${id}`);

/////Cart
export const getCart = () => API.get('/cart');
export const addToCart = (formdata) => API.post('/cart', formdata);
export const removeFromCart = (id) => API.delete(`/cart/${id}`);
export const updateCart = (id, formdata) => API.patch(`/cart/${id}`, formdata);

// {
//     "product_id": "956e6e71-859a-4b61-971a-50c0e61a910b",
//     "store_id": "956e6e72-ba5b-48b8-aebd-83a18bf5c5e8",
//     "quantity": 1
// }

// {
//     "quantity": 5,
//     "store_id": "956e6e72-ba5b-48b8-aebd-83a18bf5c5e8"

// }
