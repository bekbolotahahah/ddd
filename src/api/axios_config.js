import axios from 'axios';
  
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_DOMAIN
console.log(process.env.REACT_APP_BACKEND_DOMAIN);
    
export default axios;