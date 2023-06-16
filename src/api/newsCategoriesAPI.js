import newsClient from './newsClientAPI';

export const getNewsData = async () => {
  try {
    const response = await newsClient.get('/news?category=science');
    return response.data;
  } catch (error) {
    console.log('Error fetching user data:', error);
    throw error;
  }
};
