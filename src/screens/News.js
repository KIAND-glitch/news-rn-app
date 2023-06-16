import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getUserData } from '../api/userDataApi';

const NewsScreen = () => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const data = await getNewsData();
        setNewsData(data);
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <View>
      {newsData ? (
        <Text>{JSON.stringify(newsData)}</Text>
      ) : (
        <Text>Loading user data...</Text>
      )}
    </View>
  );
};

export default NewsScreen;
