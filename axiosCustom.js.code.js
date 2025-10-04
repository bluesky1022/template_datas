import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com/', // Replace with your API base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    // You can add common headers here, e.g. Authorization
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Example: Add auth token from localStorage if exists
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // You can modify config here
    return config;
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // You can transform response data here
    return response.data; // Return only data to simplify usage
  },
  (error) => {
    // Handle response errors globally
    if (error.response) {
      // Server responded with a status outside 2xx
      console.error('API error:', error.response.status, error.response.data);
      // You can handle specific status codes here
      if (error.response.status === 401) {
        // e.g. redirect to login
        // window.location.href = '/login';
      }
    } else if (error.request) {
      // No response received
      console.error('No response from server:', error.request);
    } else {
      // Other errors
      console.error('Axios error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;