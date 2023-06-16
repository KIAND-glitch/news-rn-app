import axios from 'axios';

const newsClient = axios.create({
  baseURL: 'https://inshorts-news-knbl9pokb-sumanjay.vercel.app', // Replace with your API base URL
});

export default newsClient;